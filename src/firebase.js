import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA35UivgW5GGi1_1TqGCmHD0_ECOCHyx3A",
    authDomain: "platos-services.firebaseapp.com",
    projectId: "platos-services",
    storageBucket: "platos-services.appspot.com",
    messagingSenderId: "360753971580",
    appId: "1:360753971580:web:e512210c6ba899e973a4f9"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export default firebase;