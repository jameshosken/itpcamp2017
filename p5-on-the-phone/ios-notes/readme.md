# Troubleshooting for IOS
## Special thanks to [Lea](http://hellosunschein.com/) for the iOS notes.

If you're trying to run the Cordova app on an iOS platform on your phone you might get an [error 65](https://github.com/Wizcorp/phonegap-facebook-plugin/issues/1325). The issue is that the new app doesn't have a provisioning profile set, and if the provisioning profile is not there, Apple won't let you put an app on a real device.

To fix that, you have to open the app in Xcode. Navigate to your app's folder and enter this command:

`open platforms/ios/HelloCordova.xcworkspace/`

This will now open the app in the Xcode IDE.

Navigate to the Project in the top left corner. The icon that says HelloCordova.

*See Fig.01*

This means you'll have to setup an account with Apple, but you don't necessarily need a developer account (aka pay $100/year). Follow [this tutorial](http://blog.ionic.io/deploying-to-a-device-without-an-apple-developer-account/). I suggest googling **"apple how to developer without developer account"**, because Xcode is constantly changing, so what is true now, might not be true 5 days from today :(

In general - at the end make sure that the Signing tab in the middle panel isn't empty:

*[See Fig.02]*