import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB...", // Your actual keys are handled by the environment
  authDomain: "rekh-platform.firebaseapp.com",
  projectId: "rekh-platform",
  storageBucket: "rekh-platform.firebasestorage.app",
  messagingSenderId: "4529311713",
  appId: "1:4529311713:web:..."
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };