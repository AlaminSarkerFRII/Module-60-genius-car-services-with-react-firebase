// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyco9iZCRfrPr_Clx0REcv_4v9S0YM1yA",
  authDomain: "genius-car-services-bd336.firebaseapp.com",
  projectId: "genius-car-services-bd336",
  storageBucket: "genius-car-services-bd336.appspot.com",
  messagingSenderId: "131952359810",
  appId: "1:131952359810:web:408342d85d260fa3a8379b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
