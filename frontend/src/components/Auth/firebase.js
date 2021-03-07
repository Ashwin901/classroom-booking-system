import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBUJYVCvV4IBNTbRfuzzmp0RB2O_AQmamE",
  authDomain: "classroom-booking-system-7af8b.firebaseapp.com",
  projectId: "classroom-booking-system-7af8b",
  storageBucket: "classroom-booking-system-7af8b.appspot.com",
  messagingSenderId: "992596234494",
  appId: "1:992596234494:web:3376fbac72dc81a6d855af",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
