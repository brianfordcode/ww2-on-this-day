import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      start: 1939,
      end: 1945,
      selectedDate: new Date(1939, new Date().getMonth()),
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

      // EVENTS
      events: {

        // FEB 1, 1939
        eventId1: {
          date: '1939-02-01',
          title: 'first event for feb 1',
          mainPicture: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTU3OTIzNjU0NDk4NzIzNDc0/the-pictures-that-defined-world-war-iis-featured-photo.jpg',
          books: ['book1']
        },
        eventId2: {
          date: '1939-02-01',
          title: 'second event for feb 1',
          mainPicture: 'https://i.insider.com/579f448d88e4a7b32e8bbed0?width=600&format=jpeg&auto=webp',
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
      // months offset by 1
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
        console.log(eventsOnDay, year, month, day)
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