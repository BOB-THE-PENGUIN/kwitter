var firebaseConfig = {
    apiKey: "AIzaSyAv5xqRTreOIv0yvXyFu9Wd6wO4GimHC-U",
    authDomain: "kwitter-code.firebaseapp.com",
    databaseURL: "https://kwitter-code-default-rtdb.firebaseio.com",
    projectId: "kwitter-code",
    storageBucket: "kwitter-code.appspot.com",
    messagingSenderId: "1066016317309",
    appId: "1:1066016317309:web:fbc587f03f44de87bf3614",
    measurementId: "G-D5HW13QZL2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {

    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {

    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}