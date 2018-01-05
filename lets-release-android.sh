echo "\n WARNING! Did you remember to change the version and versionCode numbers in config.xml? \n"

./lets-prepare.sh

ionic cordova build --release android # compile

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore lets-android.keystore platforms/android/build/outputs/apk/release/android-release-unsigned.apk M_LETS # sign

rm LETS_app_beta.apk # delete old version

~/Library/Android/sdk/build-tools/27.0.1/zipalign -v 4 platforms/android/build/outputs/apk/release/android-release-unsigned.apk LETS_app_beta.apk # prepare apk

echo "\n Remember to run this command on your test device before being able to install this release: # adb uninstall net.communityforge.lets (if you were were running a test build)"
