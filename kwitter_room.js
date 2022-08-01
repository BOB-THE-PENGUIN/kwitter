var firebaseConfig = {
    apiKey: "AIzaSyAk6twV4rayNIIOu4AWY9LfDSNC-OCZ02g",
    authDomain: "kwitter-84cf6.firebaseapp.com",
    databaseURL: "https://kwitter-84cf6-default-rtdb.firebaseio.com",
    projectId: "kwitter-84cf6",
    storageBucket: "kwitter-84cf6.appspot.com",
    messagingSenderId: "530129935402",
    appId: "1:530129935402:web:658e1a315db223acedf753",
    measurementId: "G-YFK9P73ZD0"
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