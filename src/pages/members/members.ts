import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavController, NavParams, LoadingController, Loading, PopoverController, Popover, Searchbar } from 'ionic-angular';
import { MemberService } from '../../services/MemberService';
import { AlertService } from '../../services/AlertService';
import { Member } from '../../domain/Member';
import { MemberDetailPage } from '../memberDetail/memberDetail';
import { KeywordsFilterPage } from '../keywords/keywords';
import { FiltersBuilderComponent } from '../../components/filtersBuilder/filtersBuilder';
import * as $ from 'jquery';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
	selector: 'page-members',
	templateUrl: 'members.html'
})
export class MembersPage implements OnInit {
	private members: Array<Member>;
	private loader: Loading
	private popover: Popover;
	private page: number;
	private isLoading: boolean;
	private hasNoMoreData: boolean;
	private filter: any;
	private filterName: string;
	private keywords: string;
	private operation: string;
	private isPopover: boolean;

	@ViewChild("searchbar") searchbar:Searchbar;

	constructor(public viewCtrl: ViewController,
		private navCtrl: NavController,
		private navParams: NavParams,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
		private memberService: MemberService,
		private alertService: AlertService,
		private keyboard: Keyboard
	) { }

	ngOnInit(): void {
		this.setPagination();
		if (this.navParams.data) {
			this.filter = this.navParams.data.filter;
			this.filterName = this.navParams.data.filterName;
			this.isPopover = this.navParams.data.isPopover;
			this.operation = this.navParams.data.operation;
		}
		this.viewCtrl.didEnter.subscribe(
			response => {
				this.page = 1;
				this.hasNoMoreData = false;
				this.isLoading = false;
				this.members = [];

				if(this.filter) this.loadMembers(); // only load when searching

				setTimeout(()=>{
			      this.searchbar.setFocus();
			  }, 200);

				this.keyboard.onKeyboardShow().subscribe((data)=>{
		      this.searchbar.setFocus();
		    })

			});
	}

	setPagination() {
		$('page-members .scroll-content').on('scroll', (ev) => {
			if (this.hasNoMoreData || this.isLoading) {
				return;
			}
			if ((ev.target.scrollHeight - ev.target.scrollTop) < 800) {
				this.loadMembers();
			}
		});
	}

	loadMembers() {
		if (this.hasNoMoreData || this.isLoading) {
			return;
		}
		this.isLoading = true;
		this.loader = this.loadingCtrl.create({
			content: ('Please wait')+'...'
		});
		this.loader.present();
		this.memberService.list(this.page, this.filter).subscribe(
			response => {
				if (!response.length) {
					this.hasNoMoreData = true;
				}
				this.members = this.members.concat(response);
				this.page++;
				this.loader.dismiss();
				this.isLoading = false;
			},
			error => {
				this.alertService.showError(error);
				this.loader.dismiss();
				this.isLoading = false;
			});
	}

	showDetails(member) {
		if (this.isPopover) {
			this.viewCtrl.dismiss(member);
		} else {
			this.navCtrl.push(MemberDetailPage, {
				id: member.id
			});
		}
	}

	showFilters() {
		this.popover = this.popoverCtrl.create(FiltersBuilderComponent, {
			options: [{
				title: ('Show By Keyword'),
				page: KeywordsFilterPage,
				params: {
					title: ('Members'),
					page: MembersPage
				}
			}, {
				title: ('Clear Filters'),
				page: MembersPage
			}]
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: true
			});
		this.popover.present();
	}

	setFilterPage(ev) { // deprecate
		this.keywords = ev.target.value;
		if(this.keywords){
			this.navCtrl.push(MembersPage, {
				filter: `&fragment=${this.keywords}`,
				filterName: `'${this.keywords}'`
			});
		}
	}

	setFilter(ev) {
		this.keywords = ev.target.value;
		if(this.keywords){
			this.page = 1; // reset
			this.members = [];
			this.hasNoMoreData = false;

			this.filter = `&fragment=${this.keywords}`;
			this.loadMembers();
		}
	}
}
