var firebaseConfig = {
    apiKey: "AIzaSyDjjQ37b53IqDQFr6NlO7aRchlK7-rwiRU",
    authDomain: "kwitter-project-7265d.firebaseapp.com",
    databaseURL: "https://kwitter-project-7265d-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-7265d",
    storageBucket: "kwitter-project-7265d.appspot.com",
    messagingSenderId: "924609350195",
    appId: "1:924609350195:web:173502cbf5989825f0b146"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("User Name");
//document.getElementById("wel").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
    room_name = document.getElementById("chat_box").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "index3.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {

        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //  //Start code
            console.log(Room_names);
            row = "<div class'room_name' id='" + Room_names + "'onclick='redirectToRoom(this.id)'>#" + Room_names + "</div> <hr>";

            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function redirectToRoom(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index3.html";
}

function logout() {
    localStorage.removeItem("User Name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}

//ADD YOUR FIREBASE LINKS HERE