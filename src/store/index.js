import { createStore } from 'vuex'

// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, query, collection, where } from "firebase/firestore";
import router from '../router/index.js'




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

// const formattedDate = d => {
//   const year = d.getFullYear()
//   const month = (d.getMonth() < 10 ? '0' : '') + (d.getMonth() + 1)
//   const day = (d.getDate() < 10 ? '0' : '') + d.getDate()
//   return year + '-' + month + '-' + day
// }

function getTodaysDate() {
  const d = new Date()
  const year = '1939'
  const month = (d.getMonth() < 10 ? '0' : '') + (d.getMonth() + 1)
  const day = (d.getDate() < 10 ? '0' : '') + (d.getDate())
  const todaysDate = year + '-' + month + '-' + day
  return todaysDate
}

const store = createStore({
  state() {
    const date = window.location.pathname.slice(1)
    // TODO: ADD VALIDATION ON DATE BEFORE USE
    return { 
      selectedDate: date || getTodaysDate(),
      events: [],
    }
  },
  getters: {

    eventsOnDay: (state, getters) => () => {
      const eventsOnDay = []
      Object
        .entries(state.events)
        .forEach(entry =>  {
          const [ eventId, event ] = entry
          if (event.date === state.selectedDate && event.published === true) {
            eventsOnDay.push(event)
          }
        })
        return eventsOnDay
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
      router.push(`/${dateSelectedFromDateSelector}`)
      
    },

    async loadJSONFiles(context) {
      const date = context.state.selectedDate
      const q = query(collection(db, "submitted-events"), where("date", "==", date))
      const querySnapshot = await getDocs(q);
      const events = []
      querySnapshot.forEach(doc => events.push(doc.data()))
      context.commit('loadJSONFiles', events)

    }
  },
})

router.afterEach((to, from) => {
  console.log('router', to, from)
  if (to.params.datestring !== store.state.selectedDate) {
    store.dispatch('changeDate', to.params.datestring)
  }
  store.dispatch('loadJSONFiles')

})

export default store