import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSMlYW78Rhq-8YHZRPp0bJWlitgJQPpEs",
  authDomain: "project-alpha-326014.firebaseapp.com",
  projectId: "project-alpha-326014",
  storageBucket: "project-alpha-326014.appspot.com",
  messagingSenderId: "589104396285",
  appId: "1:589104396285:web:5801d67470fd887c41cb94",
  measurementId: "G-BQH46M0KB9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);