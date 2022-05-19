// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getDatabase } from "firebase/database"
import { getFirestore, collection, getDocs } from "firebase/firestore"
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

// get analytics
const analytics = getAnalytics(app)

// get database
//const database = getDatabase(app)
const database = getFirestore(app)

// get the collection
const colRef = collection(database, 'data')

// get collection data and store objects in an array
let data = []
getDocs(colRef).then((collectionSnapShot) => {
    collectionSnapShot.docs.forEach((doc) => {
        data.push({
            ...doc.data(),
            id: doc.id
        })
    })
}).catch(error => {
    console.log(error.message)
})

// export the array of data objects
export default data;