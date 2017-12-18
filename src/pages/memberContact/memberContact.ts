import { Component, OnInit } from '@angular/core';
import { ViewController, NavParams, LoadingController, Loading, PopoverController, Popover } from 'ionic-angular';
// import { AuthService } from '../../services/AuthService';
import { AlertService } from '../../services/AlertService';
import { ConfirmationBuilderComponent } from '../../components/confirmationBuilder/confirmationBuilder';
import { MoreActionsBuilderComponent } from '../../components/moreActionsBuilder/moreActionsBuilder';
import { MemberService } from '../../services/MemberService';

@Component({
	selector: 'page-contact-member',
	templateUrl: 'memberContact.html'
})
export class ContactMemberPage implements OnInit {
	private fields: any;
	private isValid: boolean = false;
	private loader: Loading
	private isLoaded: boolean = false;
	private popover: Popover;
	private to_id: any;
	private to_name: any;
	private message_data: any;

	constructor(private viewCtrl: ViewController,
		private navParams: NavParams,
		public loadingCtrl: LoadingController,
		private popoverCtrl: PopoverController,
		// private authService: AuthService,
		private memberService: MemberService,
		private alertService: AlertService) { }

	ngOnInit(): void {
		this.isLoaded = false;
		if (this.navParams.data) {
			this.to_id = this.navParams.data.to_id;
			this.to_name = this.navParams.data.to_name;
		}
		this.viewCtrl.didEnter.subscribe(
			response => {
				if (!this.isLoaded) {
					this.loader = this.loadingCtrl.create({
						content: _('Please wait')+'...'
					});

					this.fields = {
			      'subject': {
							'name': 'subject',
							'placeholder': '',
							'label': _('Subject'),
							'required':true
						},
			      'body': {
							'name': 'body',
							'placeholder': '',
							'label': _('Message'),
							'type':'textarea'
						}
			    };
					this.isLoaded = true;
				}
			});
	}

	onChanged(options: { value: any, isValid: boolean }) {
		this.message_data = options.value;
		this.isValid = options.isValid;
	}

	sendMessage() {
		console.log(this.fields)
		console.log(this.message_data)
		this.popover = this.popoverCtrl.create(ConfirmationBuilderComponent, {
			fields: this.fields,
			operation: _('Contact Member')
		}, {
				cssClass: 'confirm-popover',
				enableBackdropDismiss: false
			});
		this.popover.onDidDismiss((data) => {
			if (data && data.hasConfirmed) {
				this.loader = this.loadingCtrl.create({
					content: _('Please wait')+'...'
				});
				this.loader.present();
				this.memberService.contact(this.to_id, this.message_data).subscribe(
					response => {
						this.loader.dismiss();
						this.popover = this.popoverCtrl.create(MoreActionsBuilderComponent, {
							operation: _('Message'),
							status: _('was sent'),
							options: []
						}, {
								cssClass: 'confirm-popover',
								enableBackdropDismiss: false
							});
						this.popover.present();
					},
					error => {
						this.alertService.showError(error);
						this.loader.dismiss();
					});
			}
		});
		this.popover.present();
	}
}
