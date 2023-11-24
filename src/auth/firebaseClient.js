import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCD4FZ31dgVsDR9y1JhvKO3N6MrbNDLLM",
  authDomain: "gentle-pier-406100.firebaseapp.com",
  projectId: "gentle-pier-406100",
  storageBucket: "gentle-pier-406100.appspot.com",
  messagingSenderId: "646544299559",
  appId: "1:646544299559:web:4394369fdf090bd4462002",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/userinfo.profile");
provider.addScope("https://www.googleapis.com/auth/userinfo.email");
provider.addScope("https://www.googleapis.com/auth/spreadsheets");
provider.addScope("https://www.googleapis.com/auth/drive");
