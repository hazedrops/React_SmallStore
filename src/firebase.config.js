import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuYRWEcbTKCtIhUsLv0lfOGrmiB788IPc',
  authDomain: 'react-small-store-site.firebaseapp.com',
  projectId: 'react-small-store-site',
  storageBucket: 'react-small-store-site.appspot.com',
  messagingSenderId: '953835037716',
  appId: '1:953835037716:web:995e332b12cb5c7252b301',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
