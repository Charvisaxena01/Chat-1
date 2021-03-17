var firebaseConfig = {
    apiKey: "AIzaSyBw66ZWU1i_ApJbuuZ_JPnsJzHN9VRStn0",
    authDomain: "kwitter-cdd75.firebaseapp.com",
    databaseURL: "https://kwitter-cdd75-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdd75",
    storageBucket: "kwitter-cdd75.appspot.com",
    messagingSenderId: "1057683855884",
    appId: "1:1057683855884:web:afeac29a00d38df7322c29"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("User Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

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
            row = "<div class'room_name' id=''" + Room_names + "onclick='redirectToRoom(this.id)'>#" + Room_names + "</div> <hr>";

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