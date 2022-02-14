import { createStore } from 'vuex'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
} from "firebase/firestore";


const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      selectedDate: (() => {
        const today = new Date();
        return new Date(1939, today.getMonth(), today.getDate())
      })(),
      events: [],
      video: "/banner-video.mp4",
      timelineYearPictures: {
        '1939': "https://www.thenation.com/wp-content/uploads/2015/08/germany_poland_loc_img.jpg",
        '1940': "https://www.history.com/.image/t_share/MTU3ODc4NjAyNzA4NDI4NTEx/image-placeholder-title.jpg",
        '1941': "https://list23.com/img/pearl-harbor-day-2021-80th-anniversary-of-date-which-will-live-in-infamy.jpeg",
        '1942': "https://i.insider.com/5b69fe6c8905f218008b5063?width=1136&format=jpeg",
        '1943': "https://media.iwm.org.uk/ciim5/29/844/large_000000.jpg",
        '1944': "https://media.newyorker.com/photos/5cf933a5d822ca03dda19640/16:9/w_2560,h_1440,c_limit/Angell-DDay.jpg",
        '1945': "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2021-05/626815-wiki-american_military_personnel_gather_in_paris_to_celebrate_the_japanese_surrender.jpg",
      },
    }
  },
  getters: {
    book(id) {
      return [] // TODO: editor for recommended books
    },
    event(id) {
      return state.events.find(e => e.id == id);
    },
    eventsOnDay: (state) => () => {
      return state.events
    },
    yearTimeline: (state) => () => {
      const years = []
      for (let i = state.start ; i <= state.end; i++) { years.push(i) }
      return years
    },
    getPicForBg: (state) => (year) => {
      return year ? state.timelineYearPictures[year] : ''
    },
  },
  mutations: {
    changeDate(state, dateSelectedfromTimeline) {
      state.selectedDate = dateSelectedfromTimeline
    },
    fetchEvents(state, data) {
      state.events = data
    }
  },
  actions: {
    changeDate(context, dateSelectedfromTimeline) {
      context.commit("changeDate", dateSelectedfromTimeline);

      // TODO: cleanup - trigger fetchEvents instead of copy, paste
      let lo = new Date(dateSelectedfromTimeline);
      lo.setDate(lo.getDate() - 3);
      lo = lo.toISOString().split("T")[0];
      let hi = new Date(dateSelectedfromTimeline);
      hi.setDate(hi.getDate() + 3);
      hi = hi.toISOString().split("T")[0];
      console.log(lo);
      console.log(hi);
      getDocs(
        query(
          collection(getFirestore(), "events"),
          where("startDate", ">=", lo),
          where("startDate", "<=", hi),
          orderBy("startDate", "asc"),
          orderBy("id", "desc"),
          limit(100)
        )
      ).then((docs) => {
        const data = [];
        docs.forEach((e) => data.push(e.data()));
        context.commit("fetchEvents", data);
      });
    },
    fetchEvents(context) {
      let lo = new Date(context.state.selectedDate);
      lo.setDate(lo.getDate() - 3);
      lo = lo.toISOString().split("T")[0];
      let hi = new Date(context.state.selectedDate);
      hi.setDate(hi.getDate() + 3);
      hi = hi.toISOString().split("T")[0];
      getDocs(
        query(
          collection(getFirestore(), "events"),
          where("startDate", ">=", lo),
          where("startDate", "<=", hi),
          orderBy("startDate", "asc"),
          orderBy("id", "desc"),
          limit(100)
        )
      ).then((docs) => {
        const data = [];
        docs.forEach((e) => data.push(e.data()));
        context.commit("fetchEvents", data);
      });
    }
  },
  modules: {
  }
})

export default store