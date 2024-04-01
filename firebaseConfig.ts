import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUKjzVOryt9ySFqmkNDSxEZOVo8We-UpM",
  authDomain: "reactnative-todoapp-40f02.firebaseapp.com",
  projectId: "reactnative-todoapp-40f02",
  storageBucket: "reactnative-todoapp-40f02.appspot.com",
  messagingSenderId: "813355966310",
  appId: "1:813355966310:web:396f0942b909192cb332a7",
  measurementId: "G-K38TVY7NV4",
};

export const app = initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
