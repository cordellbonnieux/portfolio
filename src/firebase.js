import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getDatabase } from 'firebase/database'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDgUSE9htjY1mD-WD1lXfV-I-UAtPnmuR4',
  authDomain: 'portfolio-35cbe.firebaseapp.com',
  databaseURL: 'https://portfolio-35cbe-default-rtdb.firebaseio.com',
  projectId: 'portfolio-35cbe',
  storageBucket: 'portfolio-35cbe.appspot.com',
  messagingSenderId: '1093055045764',
  appId: '1:1093055045764:web:0b411f68c26fafef4ba2d1',
  measurementId: 'G-ZTDRR1Q6CD'
}

// Initialize Firebase
let app = initializeApp(firebaseConfig)

// get analytics
const analytics = getAnalytics(app)

// get database
const database = getFirestore(app)

// get collection data and store objects in an array
async function getData(db) {
    const colRef = collection(db, 'data')
    const snapShot = await getDocs(colRef)
    let pageData = []
    snapShot.forEach(document => {
        pageData.push(document.data())
    })
    /*
    snapShot.forEach(doc => {
        console.log(doc.id, doc.data())
    })
    const d = snapShot.docs.map(doc => doc.data())
    */
    return pageData
}
const data = getData(database)

// export the array of data objects
export default data;