import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAU8UgHiGJbxk06z0U3SDYk6MCzSHv14Oc",
    authDomain: "supple-antenna-379817.firebaseapp.com",
    projectId: "supple-antenna-379817",
    storageBucket: "supple-antenna-379817.appspot.com",
    messagingSenderId: "905117852456",
    appId: "1:905117852456:web:3a8b725704c94302dae61d",
    measurementId: "G-X8ZH2KDHZY"
};


firebase.initializeApp(firebaseConfig);
export const firebaseStorage = firebase.storage();