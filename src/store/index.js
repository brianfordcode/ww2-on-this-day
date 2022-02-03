import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      selectedDate: new Date(1939, new Date().getMonth(), new Date().getDay() - 1),
      post: 'POST',

      // BOOKS
      books: {
        book1: {
          title: 'book title',
          picture: 'https://picsum.photos/300/200',
          author: 'author title',
          link: 'affiliate link',
        },
      },
      pictures: {
        // TIMELINE YEAR PICTURES
        thirtyNine: "https://www.thenation.com/wp-content/uploads/2015/08/germany_poland_loc_img.jpg",
        forty: "https://www.history.com/.image/t_share/MTU3ODc4NjAyNzA4NDI4NTEx/image-placeholder-title.jpg",
        fortyOne: "https://list23.com/img/pearl-harbor-day-2021-80th-anniversary-of-date-which-will-live-in-infamy.jpeg",
        fortyTwo: "https://i.insider.com/5b69fe6c8905f218008b5063?width=1136&format=jpeg",
        fortyThree: "https://media.iwm.org.uk/ciim5/29/844/large_000000.jpg",
        fortyFour: "https://media.newyorker.com/photos/5cf933a5d822ca03dda19640/16:9/w_2560,h_1440,c_limit/Angell-DDay.jpg",
        fortyFive: "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2021-05/626815-wiki-american_military_personnel_gather_in_paris_to_celebrate_the_japanese_surrender.jpg",
      },

      // EVENTS
      events: {

        // FEB 1, 1939
        eventId1: {
          date: '1939-02-02',
          title: 'first event for feb 2, 1939',
          mainPicture: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNjU0NDk4NzIzNDc0/the-pictures-that-defined-world-war-iis-featured-photo.jpg',
          books: ['book1']
        },
        eventId2: {
          date: '1939-02-02',
          title: 'second event for feb 2, 1939',
          mainPicture: 'https://i.insider.com/579f448d88e4a7b32e8bbed0?width=600&format=jpeg&auto=webp',
          books: ['book1']
        },
        eventId3: {
          date: '1939-02-02',
          title: 'third event for feb 2, 1939',
          mainPicture: 'https://www.wearethemighty.com/app/uploads/legacy/assets.rbl.ms/17493201/origin.jpg',
          books: ['book1']
        },
        eventId4: {
          date: '1939-02-02',
          title: 'fourth event for feb 2, 1939',
          mainPicture: 'https://www.archives.gov/files/research/still-pictures/ww2-111-sc-407101.jpeg',
          books: ['book1']
        },

      }
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
    yearTimeline: (state, getters) => () => {
      const years = []
      for (let i = state.start ; i <= state.end; i++) { years.push(i) }
      return years
    },
    getPicForYearBg: (state, getters) =>(year) => {
      if (year === 1939) {
        return state.pictures.thirtyNine
      } else if (year === 1940) {
        return state.pictures.forty
      } else if (year === 1941) {
        return state.pictures.fortyOne
      } else if (year === 1942) {
        return state.pictures.fortyTwo
      } else if (year === 1943) {
        return state.pictures.fortyThree
      } else if (year === 1944) {
        return state.pictures.fortyFour
      } else if (year === 1945) {
        return state.pictures.fortyFive
      }
    },
  },
  mutations: {
    changeDate(state, date) {
      state.selectedDate = date
    }
  },
  actions: {
    changeDate(context, date) {
      context.commit('changeDate', date)
    }
  },
  modules: {
  }
})

export default store