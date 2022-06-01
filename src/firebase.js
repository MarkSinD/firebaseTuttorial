import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBpsTF4WrBWXhgHHD0421z_Aeyr5BUz1ic",
  authDomain: "fir-tutorial-d610f.firebaseapp.com",
  projectId: "fir-tutorial-d610f",
  storageBucket: "fir-tutorial-d610f.appspot.com",
  messagingSenderId: "482681307823",
  appId: "1:482681307823:web:346a9d3431f2a84e528a5a",
  measurementId: "G-7F92WVCQGT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);