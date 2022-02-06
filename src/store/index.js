import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      selectedDate: new Date(1939, new Date().getMonth(), new Date().getDate()),
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
      return state.books[id]
    },
    event(id) {
      return state.events[id]
    },
    eventsOnDay: (state, getters) => (year, month, day) => {

      const eventsOnDay = []
      // MONTHS OFFSET BY 1, IF 1 DIGIT ADD 0 TO BEGINNING
      month = (month < 10 ? '0' : '') + (month + 1)
      day = (day < 10 ? '0' : '') + day
      Object
        .entries(state.events)
        .forEach(entry =>  {
          const [ eventId, event ] = entry
          if (event.date === `${year}-${month}-${day}`) {
            eventsOnDay.push(event)
          }
        })
        return eventsOnDay
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
    loadJSONFiles(state, data) {
      state.events = data
    }
  },
  actions: {
    changeDate(context, dateSelectedfromTimeline) {
      context.commit('changeDate', dateSelectedfromTimeline)
    },
    loadJSONFiles(context) {
      fetch("events.json")
        .then(response => response.json())
        .then(data => (context.commit('loadJSONFiles', data)))
    },
  },
  modules: {
  }
})

export default store