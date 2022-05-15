// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use - Done below ex) import ...
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuYRWEcbTKCtIhUsLv0lfOGrmiB788IPc',
  authDomain: 'react-small-store-site.firebaseapp.com',
  projectId: 'react-small-store-site',
  storageBucket: 'react-small-store-site.appspot.com',
  messagingSenderId: '953835037716',
  appId: '1:953835037716:web:7e7e55a6c4c4b49b52b301',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
