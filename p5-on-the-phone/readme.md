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
*We will run through installing cordova together during the workshop*

1. Install Cordova using `npm install -g cordova`
2. Navigate to where you want your project in your terminal
3. Run `cordova create bouncingBallApp`
4. Add a platform:
 1. `cd bouncingBallApp`
 2. `cordova platform add [ios/android/windows/browser]`
5. Test! `cordova run [ios/android/windows/browser]`

[Cordova Documentation](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)

----

### Review of p5.js
Now that we've got Cordova up and running, let's have a look at what we're going to port to the phone. For this example we'll create a simple bouncing ball sketch. See **BouncingBallSketch** in *Examples*.

----

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
