import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC3pQkNktPUN57v4ICmzwG06gqAYvOaU94",
  authDomain: "todo-reactapp-6d26d.firebaseapp.com",
  databaseURL: "https://todo-reactapp-6d26d-default-rtdb.firebaseio.com",
  projectId: "todo-reactapp-6d26d",
  storageBucket: "todo-reactapp-6d26d.appspot.com",
  messagingSenderId: "814506732542",
  appId: "1:814506732542:web:8bdc851e2cd18985bf6eaf",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
