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
        v-model="selectedDate"
        :year-range="[1939, 1945]"
        month-name-format="long"
        :enable-time-picker="false"
        model-type="yyyy-MM-dd"
        input-class-name="dp-custom-input"
        menu-class-name="dp-custom-menu"
        style="--dp-font-family: Courier Prime, monospace;"
        :action-row="{ showCancel: false }"
        year-first
        no-today
        position="center"
        class="date-picker"
      >
        <template #clear-icon="{ clear }">
          <!-- <img class="input-slot-image" src="/public/ww2-on-this-day-logo.png" @click="selectCurrentDate()" /> -->
        </template>
        <!-- <template #action-extra="{  }"><p @click="selectCurrentDate()">today</p></template> -->
        
      </VueDatePicker>    
  

  <div class="about-contact">
    <!-- <p style="font-size: 20px;" @click="selectCurrentDate">Today</p> -->
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>

</div>

</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
// import { ref } from 'vue';

// const date = ref((new Date(1939, new Date().getMonth(), new Date().getDate())));

export default {
  components: { VueDatePicker },
  created() {
      this.updateDate()
  },
  data() {
    const [year, month, day] = this.$route.params.datestring.split('-')
    return {
      selectedDate: `${year}-${month}-${day}`,
      // date: null,
    }
  },
  methods: {
    selectCurrentDate() {
      // console.log('test')
    },
    // updateDate() {
    //   console.log(this.$route.params.datestring.split('-'))

    //   const [ year, month, day ] = this.$route.params.datestring.split('-')
    //   const date = new Date(+year, +month - 1, +day)
    //   // this.$store.dispatch('changeDate', date)
    //   this.$store.state.selectedDate = date
    //   this.$store.dispatch('changeDate', date)
    // },

    updateDate() {
      console.log(this.$route.params.datestring, "updateDate")

      const [ year, month, day ] = this.$route.params.datestring.split('-')
      const date = new Date(+year, +month - 1, +day)
      console.log(date, "update")
      this.$store.dispatch('changeDate', date)
      this.$store.state.selectedDate = this.selectedDate
      this.$store.dispatch('changeDate', this.selectedDate)
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
  /* width: max-content; */
}

.logo {
  width: 250px;
  margin: 10px;
  cursor: pointer;
}


/* .date-selector {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
} */

.about-contact {
  display: flex;
  align-items: center;
}

.about-contact > * {
  cursor: pointer;
    text-decoration: none;
    color: black;
    font-size: 12px;
    margin: 10px;
    font-family: "Courier Prime", monospace;
    color: rgb(82, 78, 78);
    /* display: flex; */
}

@media screen and (max-width: 900px) { 

  .main-container {
    display: flex;
    flex-direction: column;
  }

  .date-picker {
  width: 90%;
}

}

</style>