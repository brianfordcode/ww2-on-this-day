import { createStore } from 'vuex'

// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, query, collection, where } from "firebase/firestore"; 


// REAL CREDENTIALS
const firebaseConfig = {
  apiKey: "AIzaSyBS1sZtXMnh5xFwJnRIoGCSwCiDymKO2VI",
  authDomain: "ww2-on-this-day.firebaseapp.com",
  projectId: "ww2-on-this-day",
  storageBucket: "ww2-on-this-day.appspot.com",
  messagingSenderId: "814949029524",
  appId: "1:814949029524:web:343f2f6669b975b9fc0681",
  measurementId: "G-YTWHJZS99D"
};

// TEST CREDENTIALS
// const firebaseConfig = {
//   apiKey: "AIzaSyDgJkeYFH6F6h2RBn5SZJ8hDktY3bQSito",
//   authDomain: "ww2-development.firebaseapp.com",
//   projectId: "ww2-development",
//   storageBucket: "ww2-development.appspot.com",
//   messagingSenderId: "150864423280",
//   appId: "1:150864423280:web:be521909810e49c69e87b5",
//   measurementId: "G-B4V4090WQW"
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const formattedDate = d => {
  const year = d.getFullYear()
  const month = (d.getMonth() < 10 ? '0' : '') + (d.getMonth() + 1)
  const day = (d.getDate() < 10 ? '0' : '') + d.getDate()
  return year + '-' + month + '-' + day
}

const store = createStore({
  state() {
    return {
      selectedDate: new Date(1939, new Date().getMonth(), new Date().getDate()),
      events: [],
    }
  },
  getters: {
    eventsOnDay: (state, getters) => (year, month, day) => {
      const eventsOnDay = []
      // MONTHS OFFSET BY 1, IF 1 DIGIT ADD 0 TO BEGINNING
      month = (month < 10 ? '0' : '') + (month + 1)
      day = (day < 10 ? '0' : '') + day
      Object
        .entries(state.events)
        .forEach(entry =>  {
          const [ eventId, event ] = entry
          if (event.date === `${year}-${month}-${day}` && event.published === true) {
            eventsOnDay.push(event)
          }
        })
        return eventsOnDay
    },
    dateForRouter: (state) => () => {
      return formattedDate(state.selectedDate)
    },
  },
  mutations: {
    changeDate(state, dateSelectedFromDateSelector) {
      state.selectedDate = dateSelectedFromDateSelector
    },
    loadJSONFiles(state, data) {
      state.events = data
    },

  },
  actions: {
    changeDate(context, dateSelectedFromDateSelector) {
      context.commit('changeDate', dateSelectedFromDateSelector)
    },

    async loadJSONFiles(context) {
      const date = formattedDate(context.state.selectedDate)
      const q = query(collection(db, "submitted-events"), where("date", "==", date))
      const querySnapshot = await getDocs(q);
      const events = []
      querySnapshot.forEach(doc => events.push(doc.data()))
      context.commit('loadJSONFiles', events)

    }
  },
})

export default store