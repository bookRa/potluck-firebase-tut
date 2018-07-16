const config = {
  apiKey: "AIzaSyA0DkxxWot8Hrejbi27uAlZBSyg1yd8PzM",
  authDomain: "fun-food-chat.firebaseapp.com",
  databaseURL: "https://fun-food-chat.firebaseio.com",
  projectId: "fun-food-chat",
  storageBucket: "fun-food-chat.appspot.com",
  messagingSenderId: "956154665293"
};

let firebase = window.firebase.initializeApp(config); //loads the firebase from index.html script.
// console.log(firebase); //.GoogleAuthProvider);
export const provider = new firebase.firebase_.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
