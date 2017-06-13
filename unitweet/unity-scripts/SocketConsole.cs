using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SocketIO;

public class SocketConsole : MonoBehaviour {

    GameObject go;

    SocketIOComponent socket;

	// Use this for initialization
	void Start () {
           
        //This will be a reference to the SocketIO prefab that we dragged in.
        go =  GameObject.Find("SocketIO");
           
        //This is a reference to the Socket Component of that Gameobject
        socket = go.GetComponent<SocketIOComponent>();

        /*
         * What to do when a socket message is received
         * In this case, fire the "ReceiveTest" function
        */    
        socket.On("newuser", ReceiveTest);
        socket.On("tweet", ReceiveTweet);
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    public void ReceiveTest(SocketIOEvent e)
    {
        //Send a message to console that we've got data!
        Debug.Log(e.data);
    }

    public void ReceiveTweet(SocketIOEvent e)
    {
        //Send a message to console that we've got data!
        Debug.Log("Incoming Tweet!");
        Debug.Log(e.data);
    }
}
