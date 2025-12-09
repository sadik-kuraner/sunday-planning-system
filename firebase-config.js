const firebaseConfig = {
  apiKey: "AIzaSyCUyxNS8S490CPY6MSmVSKYZAkR9BxsXig",
  authDomain: "sunday-planning-system.firebaseapp.com",
  projectId: "sunday-planning-system",
  storageBucket: "sunday-planning-system.firebasestorage.app",
  messagingSenderId: "986157390486",
  appId: "1:986157390486:web:5970b2c20e307b140880b7"
};

// Firebase v8 initialisatie
firebase.initializeApp(firebaseConfig);

// Firestore reference
const db = firebase.firestore();