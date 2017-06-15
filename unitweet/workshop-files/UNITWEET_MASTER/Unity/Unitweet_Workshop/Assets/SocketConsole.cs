using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SocketIO;

public class SocketConsole : MonoBehaviour {

    GameObject socketObj;

    SocketIOComponent socketIOcomponent;

	// Use this for initialization
	void Start () {

        socketObj = GameObject.Find("SocketIO");

        socketIOcomponent = socketObj.GetComponent<SocketIOComponent>();

        socketIOcomponent.On("firstConnection", ReceiveTest);

        socketIOcomponent.On("tweet", ReceiveTweet);
            
	}

    void ReceiveTest(SocketIOEvent e)
    {
        Debug.Log(e.data);
    }
	
	void ReceiveTweet(SocketIOEvent e)
    {
        //This is where we get the tweet!

        //Since the data is json, we have to extract usable info from it:

        Debug.Log("New Tweet!");

        //We can use "GetField" to extract to data of a particular key/value pair in the JSON.
        //Since our server is only sending one pair {message: "[text]"}, our decoder looks like this:
        Debug.Log("Tweet text is: " + e.data.GetField("message"));

        /*
         * Now do something with this data! 
         * Use it to connect your VR world to the online world, or
         * Use the data to dynamically generate parts of your game world, or
         * Create stunning data visualisations with the power of Unity's realtime 3D engine, OR EVEN
         * Use keywords from the stream to collectively control your characters via twitter, a la 'twitch'!
         * 
         * Let's do something weird.
         */
    }
}
