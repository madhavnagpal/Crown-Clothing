# Firebase

We are using firebase for two things

1. **Firestore databse**: For making **CRUD** (Create Read Update Delete) operations
2. **Authentication** is the process of identifying users that request access to a system, network, or device. Access control often determines user identity according to credentials like username and password.

Add firebase library to the project

```
npm install firebase
```

# Initializing our firebase app

```
import { initializeApp } from "firebase/app";

// Our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Authentication Flow by sign in with google

1. Front end sends user email password(or alternative) to google for verification
2. Google verifies and sends auth_token
3. Front end sends auth_token to firebase
4. Firebase sends auth_token to google for verification
5. then Firebase (after successful verification from google) generates and send access_token to front_end
6. Front end stores this accesss_token, which is sent on each api request for making any CRUD operation. By this access_token backend gives user permissions to do operations
