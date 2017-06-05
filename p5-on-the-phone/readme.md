p5.js on the phone
======
Or: How I Learned To Stop Worrying About Android Studio And Love Cordova
------

### Workshop Breakdown:
1. Workshop Requirements *(Android Studio/XCode/VS2015 + node.js + Cordova + p5js)*
2. Review of p5js *(Let's make a ball bounce)*
3. P5 and Cordova!

### Workshop Requirements

#### 1. SDKs

To build and run apps, you'll need to have the development SDKs installed for the platform you are building to.

**For Android development you'll need the following installed:**
1. [Java Development Kit](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) **8** or later.
2. [Android Studio](https://developer.android.com/studio/index.html)
  1. Android Platform SDK for your version of android
  2. Android SDK build-tools version 19.1.0 or higher
  3. Android Support Repository

For more detailed information about preparing the android environment see [Android Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#requirements-and-support). Focus on **"Installing the Requirements"** section if you are having problems.

**For IOS development you will need:**
1. A Mac computer running Yosemite or later.
2. XCode installed.
3. IOS deployment tools *(install using npm:* `npm install -g ios-deploy`)

For more detailed information visit [IOS Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#requirements-and-support)

**For Windows development you will need:**
1. a Windows machine
2. Visual Studio 2015 or higher.

More detailed information can be found at [Windows Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html#requirements-and-support)

#### 2. Node.js

Download and install [Node.js](https://nodejs.org/en/download/). Mac & Linux users can run node in the **terminal**, Windows users will have to run the **Node.js Command Prompt** app.

#### 3. Cordova

1. Install Cordova using `npm install -g cordova`
2. Navigate to where you want your project in your terminal
3. Run `cordova create bouncingBallApp`
4. Add a platform:
 1. `cd bouncingBallApp`
 2. `cordova platform add [ios/android/windows/browser]`
5. Test! `cordova run [ios/android/windows/browser]`

[Cordova Documentation](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)


### Review of p5.js
Now that we've got Cordova up and running, let's have a look at what we're going to port to the phone. For this example we'll create a simple bouncing ball sketch. See **BouncingBallSketch** in *Examples*.

### p5 and Cordova!

1. Basic changes to Cordova default app.
  1. Remove content of *index.html* and `this.receivedEvent('deviceready')` reference in *index.js*.
  2. Add `p5.js` script tag to *index.html*
  3. Add a `.cnv{}` element in *index.css* for styling our p5 canvas later.

2. Quirks of p5 in Cordova
  * We need to postpone p5's `setup()` call until our device is loaded and ready. To do this we assign our p5 sketch as an object, and only call it on device ready.
  * Super simple debugging can be achieved by using alerts rather than console logs. There are ways around this, such as [remote debugging for android](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3#debugging-webviews) or using the Xcode console for ios, but for simplicity's sake right now we'll use alerts

**bounceBallSketch:** *(See bounceBallSketch.js in Examples for full code.)*
```javascript
var bounceBallSketch = function(sketch){

  sketch.setup(){
    //We must now call 'sketch' to use any p5 specific code.
    var cnv = sketch.createcanvas(200,200);
  }

  sketch.draw(){
    fill(255,0,0);
    sketch.rect(50,50,50,50);
  }

}
```
**index.js:** *(Based on Cordova default app. Feel free to rename to something more interesting)*
```javascript

```
