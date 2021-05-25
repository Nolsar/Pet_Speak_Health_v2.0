import firebase from 'firebase';
import app from 'firebase/app';
import api from "./api";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBPwyHD-TYn-LXXwy9NFcrrfOXXntUvD8Y",
    authDomain: "pet-speak-health.firebaseapp.com",
    projectId: "pet-speak-health",
    storageBucket: "pet-speak-health.appspot.com",
    messagingSenderId: "451970066555",
    appId: "1:451970066555:web:c6e20525d13a3b94e91ade",
    measurementId: "G-07ENBDQ1JL"
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)
    }

    sendResetPasswordEmail = async (data) => {
        return await this.auth.sendPasswordResetEmail(data.email).then(() => {
            // Email sent.
            return { status: true };
        }).catch((error) => {
            // An error happened.
            return { status: false };
        });
    }

    

    createUserWithEmailAndPassword = async (credential) => {
        return await this.auth.createUserWithEmailAndPassword(credential.email, credential.password)
            .then((user) => {
                
                var userData = { 
                    email: credential.email,
                     first_name: credential.first_name,
                     last_name: credential.last_name,
                     uid: user.user.uid
                    }
                    // console.log(userData);
                   return api.signup(userData).then((response) => {
                        console.log(response);
                    })
                // Signed in 
                // ...
                // console.log("user123: ", user);
                return { status: true, userInfo: user };
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                return { status: false, msg: errorMessage, errorCode: errorCode }
            });
    }

    // function that checks if the user still in 
    getUserData() {
        console.log("yiitakaa", this.auth.currentUser);
        if (this.auth.currentUser) {
            return this.auth.currentUser.getIdToken(true).then((idT) => {
                var data = this.auth.currentUser.uid
                console.log("goulse", data);
                return api.login(data).then((response) => {
                     return {status: true, data: response};
                 }).catch((error) => {
                     return error;
                 })    
            }).catch((error) => {
                return { status: false, error: error, idToken: false }
            });
        } else {
            return { status: false, error: "no active user", idToken: false }
        }
    }


    signInWithEmailAndPassword(credential) {
        return this.auth.signInWithEmailAndPassword(credential.email, credential.password)
            .then((user) => {
                // Signed in 
                // ...
                // return { status: true, userInfo: user };
                var data = {uid: user.user.uid}
               return api.login(data).then((response) => {
                    return response;
                }).catch((error) => {
                    return error;
                })
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                return { status: false, msg: errorMessage, errorCode: errorCode }
            });
    }

    logout() {
        return this.auth.signOut()
    }

    async register(data) {
        await this.auth.createUserWithEmailAndPassword(data.email, data.password)
        return this.auth.currentUser.updateProfile({
            displayName: data.name
        });
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

        
}

export default new Firebase();