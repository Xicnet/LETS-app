ionic cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore lets-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk M_LETS
~/Library/Android/sdk/build-tools/26.0.1/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk LETS_app_beta.apk
