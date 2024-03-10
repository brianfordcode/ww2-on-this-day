<template>
  
    <img
      class="logo"
      @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
      src="/ww2-on-this-day-logo.png"
      alt="logo"
    />

    <div class="container">

        <div class="content">
            <h1>About WW2 on this day</h1>


            <div class="img-text">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MacArthur_Manila.jpg/220px-MacArthur_Manila.jpg" alt="macarthur">
            <p>
            This site has been crafted from a love and respect of history and everything World War 2.
            <br>
            <br>
            Follow along daily as each of the days events are highlighted.
            </p>
            </div>

        </div>

    </div>

    

</template>

<script>
import dateSelector from '../components/date-selector.vue'

export default {
  components: { dateSelector }
}
</script>

<style scoped>

.container {
    display: flex;
    user-select: none;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    width: 100%;
    padding: 50px 0;
}

.content {
  width: 100%;
}

.img-text {
    display: flex;
    padding: 0 20px;
}

p {
  padding-left: 20px;
}

@media screen and (max-width: 500px) {
  img {
    width: 200px;
    padding-bottom: 20px;
  }
  .img-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
}

</style>

<template>

<div class="main-container">
  <!-- LOGO -->
  <img
    class="logo"
    @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
    src="/ww2-on-this-day-logo.png"
    alt="logo"
  />

  <!-- DATE SELECTOR -->
  <!-- <input class="date-selector" type="date" v-model="selectedDate" min="1939-01-01" max="1945-12-31"/> -->

  <VueDatePicker 
        v-model="date"
        :year-range="[1939, 1945]"
        month-name-format="long"
        :enable-time-picker="false"
        model-type="yyyy-MM-dd"
        input-class-name="dp-custom-input"
        menu-class-name="dp-custom-menu"
    >
    </VueDatePicker>




  <div class="about-contact">
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>

</div>

</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref } from 'vue';

const date = ref((new Date(1939, new Date().getMonth(), new Date().getDate())));


export default {
  components: { VueDatePicker },
  created() {
      this.updateDate()
  },
  data() {
    const [year, month, day] = this.$route.params.datestring.split('-')
    return {
      selectedDate: `${year}-${month}-${day}`,
      date: null,
    }
  },
  methods: {
    updateDate() {
      const [ year, month, day ] = this.$route.params.datestring.split('-')
      const date = new Date(+year, +month - 1, +day)
      this.$store.dispatch('changeDate', date)
      this.$store.state.selectedDate = date
      this.$store.dispatch('changeDate', date)
    },

  },
  watch: {
    selectedDate(val) {
      this.updateDate()
      this.$router.push(`/${val}`)
    }
  }
}
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 300px;
  margin: 10px;
  cursor: pointer;
}

.date-selector {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
}

.about-contact a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    margin: 10px;
}

@media screen and (max-width: 900px) { 

  .main-container {
    display: flex;
    flex-direction: column;
  }

}

</style>










<template>

  <div class="main-container">
    <!-- LOGO -->
    <img
      class="logo"
      @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
      src="/ww2-on-this-day-logo.png"
      alt="logo"
    />
  
    <!-- DATE SELECTOR -->
    <!-- <input class="date-selector" type="date" v-model="selectedDate" min="1939-01-01" max="1945-12-31"/> -->
  
    <VueDatePicker 
          v-model="date"
          :year-range="[1939, 1945]"
          month-name-format="long"
          :enable-time-picker="false"
          model-type="yyyy-MM-dd"
          input-class-name="dp-custom-input"
          menu-class-name="dp-custom-menu"
      >
      </VueDatePicker>
  
  
  
  
    <div class="about-contact">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  
  </div>
  
  </template>
  
  <script>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'
  import { ref } from 'vue';
  
  const date = ref((new Date(1939, new Date().getMonth(), new Date().getDate())));
  
  
  export default {
    components: { VueDatePicker },
    created() {
        this.updateDate()
    },
    data() {
      const [year, month, day] = this.$route.params.datestring.split('-')
      return {
        selectedDate: `${year}-${month}-${day}`,
        date: null,
      }
    },
    methods: {
      updateDate() {
        const [ year, month, day ] = this.$route.params.datestring.split('-')
        const date = new Date(+year, +month - 1, +day)
        this.$store.dispatch('changeDate', date)
        this.$store.state.selectedDate = date
        this.$store.dispatch('changeDate', date)
      },
  
    },
    watch: {
      selectedDate(val) {
        this.updateDate()
        this.$router.push(`/${val}`)
      }
    }
  }
  </script>
  
  <style scoped>
  
  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    width: 300px;
    margin: 10px;
    cursor: pointer;
  }
  
  .date-selector {
    font-size: 30px;
    font-family: 'Courier New', Courier, monospace;
    background: transparent;
    border: none;
    outline: none;
    user-select: none;
  }
  
  .about-contact a {
      text-decoration: none;
      color: black;
      font-size: 12px;
      margin: 10px;
  }
  
  @media screen and (max-width: 900px) { 
  
    .main-container {
      display: flex;
      flex-direction: column;
    }
  
  }
  
  </style>