import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYZQZ9QUR6EFy-BRnYoe9HlCmwbpbDZrY",
  authDomain: "rekh-platform--rekh-platform.us-central1.hosted.app",
  projectId: "rekh-platform",
  storageBucket: "rekh-platform.firebasestorage.app",
  messagingSenderId: "4529311713",
  appId: "1:4529311713:web:0060938459439c36934424"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
