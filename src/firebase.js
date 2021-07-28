import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsd1NDI4r9IdJKJ4XKy_2Sr9ZmBV4fnJI",
  authDomain: "feegow-test-a44be.firebaseapp.com",
  projectId: "feegow-test-a44be",
  storageBucket: "feegow-test-a44be.appspot.com",
  messagingSenderId: "800135016954",
  appId: "1:800135016954:web:ccb0f3b8688a782af27443",
  measurementId: "G-LNYN5RF6L0",
});

export const auth = app.auth();
export default app;
