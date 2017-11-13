
ionic cordova build --debug android # compile

rm LETS_app_debug.apk # delete old version

mv platforms/android/build/outputs/apk/android-debug.apk LETS_app_debug.apk # prepare apk
