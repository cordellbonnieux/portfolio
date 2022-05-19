// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgUSE9htjY1mD-WD1lXfV-I-UAtPnmuR4",
  authDomain: "portfolio-35cbe.firebaseapp.com",
  databaseURL: "https://portfolio-35cbe-default-rtdb.firebaseio.com",
  projectId: "portfolio-35cbe",
  storageBucket: "portfolio-35cbe.appspot.com",
  messagingSenderId: "1093055045764",
  appId: "1:1093055045764:web:0b411f68c26fafef4ba2d1",
  measurementId: "G-ZTDRR1Q6CD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)

export default database;