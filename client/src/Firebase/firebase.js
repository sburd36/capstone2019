import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey:"AIzaSyDQ6iu5uEvZsLIUT_dI-xL86zgd71G7E2I",
    authDomain: "sharespace-5f41d.firebaseapp.com",
    databaseURL: "https://sharespace-5f41d.firebaseio.com",
    projectId: "sharespace-5f41d",
    storageBucket: "sharespace-5f41d.appspot.com",
    messagingSenderId: "50665397997"            
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();

    }
    
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
    
    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    tag = uid => this.db.ref(`hosts/${uid}`);

    tags = () => this.db.ref('hosts')

    bookings = () => this.db.ref('events');

    booking = uid => this.db.ref(`events/${uid}`);



  }
  
  export default Firebase;