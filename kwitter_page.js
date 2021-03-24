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
room_name = localStorage.getItem("rooom_name");
user_name = localStorage.getItem("User Name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                console.log(firebase_message_id);
                console.log(message_data);
                name = message_data['name'];
                like = message_data['like'];
                message = message_data['message'];
                name_tag = "<h4>" + name + "</h4>"
                message_tag = "<h4>" + message + "</h4>";
                like_tag = "<button class= btn btn-danger onclick='updateLike(this.id)'>" + like +
                    "<span class'glyphicon glyphicon-thumbs-up'> Like" + like + "</span></button> <hr>";
                row = name_tag + message_tag + like_tag;
                document.getElementById("msg").innerHTML = row;
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });

}

function updateLike(message_id) {
    console.log(message_id);
    button_id = message_id;
    console.log(button_id);
    likes = document.getElementById(button_id).value;
    console.log(likes);
    update_like = Number(likes) + 1;
    firebase.database().ref(room_name).child(message_id).update({ like: updated_Likes });


}