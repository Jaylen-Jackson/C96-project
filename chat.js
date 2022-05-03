const firebaseConfig = {
    apiKey: "AIzaSyBGXq74a6qCSCWC4e_vRUA0nuqy34H8r8c",
    authDomain: "class-93-dee19.firebaseapp.com",
    databaseURL: "https://class-93-dee19-default-rtdb.firebaseio.com",
    projectId: "class-93-dee19",
    storageBucket: "class-93-dee19.appspot.com",
    messagingSenderId: "152142114744",
    appId: "1:152142114744:web:2a11b5954d01ea6bd0294d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser() {
    
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}