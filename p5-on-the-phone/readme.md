p5.js on the phone
======
Or: How I Learned To Stop Worrying About Android Studio And Love Cordova
------

### To Prepare In Advance:

#### 1. SDKs

**Please** read through the [sdk installation guide](sdk-installation) and download & install the SDK for your device before you arrive. The installation can take a while and it will save us a lot of time.

#### 2. Node.js

Download and install [Node.js](https://nodejs.org/en/download/).

----

### Workshop Breakdown:
1. Workshop Requirements *(Android Studio/XCode/VS2015 + node.js + Cordova + p5js)*
2. Review of p5js *(Let's make a ball bounce)*
3. P5 and Cordova!

----

### Workshop Requirements

#### 1. SDKs

See [sdk installation guide](sdk-installation)

#### 2. Node.js

See section on Node.js above.

#### 3. Cordova
[Cordova Documentation](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)

*We will run through installing cordova together during the workshop*

1. Install Cordova using `npm install -g cordova`
2. Navigate to where you want your project in your terminal
3. Run `cordova create [AppName]`
4. Add a platform:
 * `cd [AppName]`
 * `cordova platform add [ios/android/windows/browser]`
5. Test! `cordova run [ios/android/windows/browser]`
6. DEBRIEF: look through *index.html* and *index.js*

**Note for Android** You may encounter an error that has something to do with "android-sdk PATH" or "Environmental Variables not set". If so, troubleshoot with below link.
* [Windows](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#windows)
* [OSX/Linux](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#os-x-and-linux)



----

### Review of p5.js
Now that we've got Cordova up and running, let's have a look at what we're going to port to the phone. For this example we'll create a simple bouncing ball sketch. See the **bouncing-ball** sketches in *Examples*.

----

### p5 and Cordova!

1. Basic changes to Cordova default app.
  * Remove content of *index.html* and `this.receivedEvent('deviceready')` reference in *index.js*.
  * Add `p5.js` script tag to *index.html*
  * Remove content of *index.css* and add a `.cnv{}` element in for styling our p5 canvas later.
  * If you want you app **fullscreen**, add `<preference name="Fullscreen" value="true" />` to the config.xml file in the main folder.
2. **Customise p5js!**
  * **Example:** Drawing! *We need to postpone p5's `setup()` call until our device is loaded and ready. To do this we assign our p5 sketch as an object, and only call it on device ready.*
  * Sometimes for super simple debugging we can use alerts instead of console logs. I usually use alerts to get a sense of the overall flow of my app.
2. Plugins.
  * Back to Bouncing Ball. Port the bouncing ball sketch to your app's **www** folder.
  * Adding a plugin to Cordova is as simple as typing `cordova plugin add [plugin-name]` in the terminal
  * Cordova has a number of [API plugins](https://cordova.apache.org/docs/en/latest/) that we can use to access data from the phone. The most rewarding at this stage is [Device Motion](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device-motion/index.html), which allows us to access the accelerometer data.
  * Also check out [Vibration](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-vibration/index.html), which opens up the realm of haptic feedback.
  * In addition to the standard plugins, there is a [community of active developers](https://cordova.apache.org/plugins/). I have found plugins that access the flashlight, maps, bluetooth, and more.
3. Debugging.
  * [Android](http://geeklearning.io/apache-cordova-and-remote-debugging-on-android/)
  * [IOS](http://geeklearning.io/apache-cordova-and-remote-debugging-on-ios/)
4. Video * Audio
  * Not available yet, stay tuned for a [later update](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-media/index.html)

### Code Snippets for p5 in Cordova

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
**index.js:** *(See index.js in examples for full code)*
```javascript

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        //initialize the p5 sketch object when device is ready
        var p5BounceBallApp = new p5 (bounceBallSketch);

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();
```
