const firebaseConfig = {
  apiKey: "AIzaSyDFFT1Gs8-2zy13JbuXCuMi4mezTYNam20",
  authDomain: "morsara-b689a.firebaseapp.com",
  projectId: "morsara-b689a",
  storageBucket: "morsara-b689a.firebasestorage.app",
  messagingSenderId: "111725106683",
  appId: "1:111725106683:web:73571a868f986a337ba75e",
  measurementId: "G-T9RYV4RE56"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
