# Unitweet: Twitter stream into Unity via node.js & socket.io

## Before you begin:

1. Create a master project folder

## Step 1: Install Node & packages

1. Install Node
2. Create new folder called 'server'
3. Open console and cd to server folder.
4. `npm init` *Creates a package.json, which will eventually allow is to deploy to the web*
5. `npm install --save express` & `npm install --save http`
  * **Test it** *resources/expressServer.js*
6. `npm install --save socket.io`

## Step 2: A basic socket.io server

1. Save your *expressServer.js* as *socketServer.js*
2. Add `var io = require("socket.io")(http)` after your other requires.
3. Create a listener for socket connections: `io.on('connection', function(socket){}`
4. Add a little functionality to that function. In our case, simply broadcast that a new user has connected.

*At this point we could write a client-side script to test in the browser, but since we're only going to be connecting through Unity, let's start there.*

## Step 3: Unity socket

1. Open Unity & create a new project
2. Download socketio from **Unity Asset Store** ![Asset Store](https://github.com/jameshosken/itpcamp2017/tree/master/unitweet/img/assetstore.png)
3. Drag **SocketIO>Prefabs>SocketIO** into your scene.
4. Click on the SocketIO GameObject in your scene, and under *Socket IO Component* change **"127.0.0.1"** to **"localhost:3000"**
5. Create a **New Empty GameObject** called *"SocketHandler"*, and add a script to it called *"SocketConsole.cs"*
6. ** *Mad code time* ** (Time to code in our SocketConsole script)
  * Find GameObject called SocketIO
  * Reference its SocketIO Component
  * In Start(), listen for a socket connection `socket.On([msg], [function])`
  * See */unity-scripts/SocketConsole.cs* for exact code.

**Test It**

Run *socketServer.js* from the command line `node socketServer.js`

## Step 4: Get an API key set from twitter

1. Go to **apps.twitter.com** and fill out the relevant details.
2. Once in your app settings, go to the **permissions** tab and make sure permissions are set to **Read and Write**
![twitter](https://github.com/jameshosken/itpcamp2017/tree/master/unitweet/img/twitterapi.PNG)
3. Create a file in your server folder. See *config-template.js* for more info.
4. Under the **Keys and Access Tokens** tab in your browser, copy each token into its respective place in *config.js*.

## Step 5: Accessing the twitter stream from your server.

1. Add the **twit** package `npm install twit --save`
2. See *resources/twitterServer.js* for code info.

## Step 6: Sending useful data to Unity!

1. Parse the data and send it through to unity!
2. Run Server and then Unity game and watch the tweets come through.

## Step 7: Use for good... or EVIL
