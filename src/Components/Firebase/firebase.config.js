import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpIDSedI5uv17BsHxd2dbYnw54TqPDsMI",
  authDomain: "recipe-jar.firebaseapp.com",
  projectId: "recipe-jar",
  storageBucket: "recipe-jar.appspot.com",
  messagingSenderId: "582290405290",
  appId: "1:582290405290:web:8c8a79577e8c7bf889ddd3"
};


const app = initializeApp(firebaseConfig);
export default app;