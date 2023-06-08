// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { isEqual } from 'lodash'
import {
  arrayUnion,
  collection,
  doc,
  DocumentData,
  FieldValue,
  getDoc,
  getDocs,
  getFirestore,
  increment,
  limit,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp
} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDK8IZ-MNspBOOJ_S7k35HbDU2Q92HFiS8',
  authDomain: 'bscpe-store-v2.firebaseapp.com',
  databaseURL:
    'https://bscpe-store-v2-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'bscpe-store-v2',
  storageBucket: 'bscpe-store-v2.appspot.com',
  messagingSenderId: '636404332362',
  appId: '1:636404332362:web:f4f7cc1bb6bbe66c3633b3',
  measurementId: 'G-7LSYK1Y8L6'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const productCollection = collection(db, 'products')

export const queryDocument = async () => {
  const docQuery = query(productCollection, limit(5))
  const querySnapshot = await getDocs(docQuery)
  console.log('fetching...')
  return querySnapshot.docs.map(res => res.data())
}

export const incrementCount = async ({ device = {} }) => {
  const countRef = doc(db, 'unique', 'visit')
  const countSnap = await getDoc(countRef)
  const d = countSnap.data()
  if (!isEqual(d?.devices[d?.devices.length - 1].device, device)) {
    await setDoc(
      countRef,
      {
        counts: increment(1),
        devices: arrayUnion({
          device,
          timestamp: Timestamp.now()
        })
      },
      { merge: true }
    )
  }
  return { result: 'OK' }
}

export const getVisitCounts = async () => {
  const countRef = doc(db, 'unique', 'visit')
  const countSnap = await getDoc(countRef)
  return countSnap.data()
}

// export const queryDocumentRealtime = () => {
//   const docQuery = query(productCollection, limit(10));
//   let data : DocumentData;
//   onSnapshot(docQuery, (querySnapshot) => {
//     data = querySnapshot.docs.map((res) => res.data());
//   });
// };
