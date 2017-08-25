# this will generate images and put them in their place
# for app splash screen (should be ideally square and at least 2732×2732px): resources/splash.png
# for app icon (should be square of at least 1024×1024px): resources/icon.png
# for this community's logo (square of at least 124px, showed on login page): resources/community_logo.png

ionic cordova resources

cp -f resources/android/icon/drawable-ldpi-icon.png src/assets/icon/favicon.png

cp -f resources/android/icon/drawable-xxxhdpi-icon.png src/assets/images/app_logo.png

cp -f resources/community_logo.png src/assets/images/community_logo.png

cp -f resources/android/splash/drawable-port-xxxhdpi-screen.png src/assets/images/splash.png # for browser
