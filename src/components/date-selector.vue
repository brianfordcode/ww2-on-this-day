<template>

  <div class="main-container">

    <!-- LOGO -->
    <img
      class="logo"
      @click="this.$router.push(`/`)"
      src="/ww2-on-this-day-logo.png"
      alt="logo"
    />

    <!-- MOVE BACK ONE DAY -->
    <p @click="moveDay(-1)" style="font-size: 30px; cursor: pointer; margin: 5px; user-select: none;"><</p>

    <!-- DATE SELECTOR -->
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
        <template #clear-icon="{ clear }"></template>
    </VueDatePicker>    

    <!-- MOVE FORWARD ONE DAY -->
    <p @click="moveDay(1)" style="font-size: 30px; cursor: pointer; margin: 5px; user-select: none;">></p>

    <div class="about-contact">
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

  </div>

</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  data() {
    return {}
  },
  methods: {
    moveDay(num) {
      const date = new Date(this.selectedDate);
      date.setDate(date.getDate() + num);
      const changedDate = date.toISOString().split('T')[0];
      this.selectedDate = changedDate
    },
  },
  computed: {
    selectedDate: {
      get() {
        return this.$store.state.selectedDate
      },
      set(value) {
        this.$store.dispatch('changeDate', value)
      }
    }
  },
}
</script>

<style scoped>

.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 250px;
  margin: 10px;
  cursor: pointer;
}

.about-contact > * {
  text-decoration: none;
  font-size: 12px;
  margin: 10px;
  color: rgb(82, 78, 78);
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