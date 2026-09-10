import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB7ndOt9seIyA40AAl3DdDICdK_ud87hTc",
    authDomain: "jojinho-63c36.firebaseapp.com",
    databaseURL: "https://jojinho-63c36-default-rtdb.firebaseio.com",
    projectId: "jojinho-63c36",
    storageBucket: "jojinho-63c36.firebasestorage.app",
    messagingSenderId: "175705924876",
    appId: "1:175705924876:web:cb21f8f3370ca4b1209529",
    measurementId: "G-6K9KGV9480"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);

export { auth, database };