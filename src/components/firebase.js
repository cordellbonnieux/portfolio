import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore/lite'

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
const app = initializeApp(firebaseConfig)

// get database
const firestore = getFirestore(app)

// get collection data
const data = getData(firestore)

async function getData(db) {
  const refCol = collection(db, 'data');
  const refSnapshot = await getDocs(refCol);
  const list = refSnapshot.docs.map(doc => doc.data());
  return list;
}

export default data