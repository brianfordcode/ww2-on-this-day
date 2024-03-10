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
    style="--dp-font-family: courier"
    :action-row="{ showCancel: false }"
    no-today
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

/* .date-selector {
  font-size: 30px;
  font-family: 'Courier New', Courier, monospace;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
} */

.about-contact a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    margin: 10px;
    font-family: 'Courier', Courier, monospace;
}

@media screen and (max-width: 900px) { 

  .main-container {
    display: flex;
    flex-direction: column;
  }

}

</style>