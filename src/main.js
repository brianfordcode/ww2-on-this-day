import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCOrhuHOLAMwlEwQRllDxf3U8zP9K2PVgQ",
  authDomain: "event-editor.firebaseapp.com",
  projectId: "event-editor",
  storageBucket: "event-editor.appspot.com",
  messagingSenderId: "852951075228",
  appId: "1:852951075228:web:cfefa53e0c5a6780cea059",
});
// enable local caching if possible
enableIndexedDbPersistence(getFirestore()).catch((err) => {
  if (err.code == "failed-precondition") {
    console.warn("unable to enable firestore caching: multi tabs open");
  } else if (err.code == "unimplemented") {
    console.warn(
      "unable to enable firestore caching: platform does not support it"
    );
  } else {
    console.warn("unable to enable firestore caching");
  }
});


store.dispatch('fetchEvents')

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')