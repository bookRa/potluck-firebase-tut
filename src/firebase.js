const config = {
  apiKey: "YOUR OWN",
  authDomain: "YOUR OWN",
  databaseURL: "YOUR OWN",
  projectId: "YOUR OWN",
  storageBucket: "YOUR OWN",
  messagingSenderId: "YOUR OWN"
};

let firebase = window.firebase.initializeApp(config); //loads the firebase from index.html script.
// console.log(firebase); //.GoogleAuthProvider);
export const provider = new firebase.firebase_.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
