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
        thirtyNine: "https://www.thenation.com/wp-content/uploads/2015/08/germany_poland_loc_img.jpg",
        forty: "https://www.history.com/.image/t_share/MTU3ODc4NjAyNzA4NDI4NTEx/image-placeholder-title.jpg",
        fortyOne: "https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTYwMjM1MDg4NTkwNzQzNDY0/4-pearl-harbor-photo-gallery-gettyimages-2660129-.jpg",
        fortyTwo: "https://i.insider.com/5b69fe6c8905f218008b5063?width=1136&format=jpeg",
        fortyThree: "http://www.nww2m.com/wp-content/uploads/2013/10/1280px-B-17F_formation_over_Schweinfurt_Germany_August_17_1943.jpg",
        fortyFour: "https://www.sarahsundin.com/wp-content/uploads/2014/11/Lost-Battalion.jpg",
        fortyFive: "https://www.nationalww2museum.org/sites/default/files/styles/wide_medium/public/2021-05/626815-wiki-american_military_personnel_gather_in_paris_to_celebrate_the_japanese_surrender.jpg",
      },

      // EVENTS
      events: {

        // FEB 1, 1939
        eventId1: {
          date: '1939-02-02',
          title: 'first event for feb 1, 1939',
          mainPicture: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNjU0NDk4NzIzNDc0/the-pictures-that-defined-world-war-iis-featured-photo.jpg',
          books: ['book1']
        },
        eventId2: {
          date: '1939-02-02',
          title: 'second event for feb 1, 1939',
          mainPicture: 'https://i.insider.com/579f448d88e4a7b32e8bbed0?width=600&format=jpeg&auto=webp',
          books: ['book1']
        },
        eventId3: {
          date: '1939-02-02',
          title: 'third event for feb 1, 1939',
          mainPicture: 'https://www.wearethemighty.com/app/uploads/legacy/assets.rbl.ms/17493201/origin.jpg',
          books: ['book1']
        },
        eventId4: {
          date: '1939-02-02',
          title: 'fourth event for feb 1, 1939',
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
      // MONTHS OFFSET BY 1
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


    }
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