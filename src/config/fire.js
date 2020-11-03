import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDzH_5uMUNd3vHUaXVuC4tCD7IYFQVheys",
    authDomain: "todo-list-542e8.firebaseapp.com",
    databaseURL: "https://todo-list-542e8.firebaseio.com",
    projectId: "todo-list-542e8",
    storageBucket: "todo-list-542e8.appspot.com",
    messagingSenderId: "536420878404",
    appId: "1:536420878404:web:f2a7c481ee702932379411"
};

const fire =  firebase.initializeApp(firebaseConfig);

export default fire;