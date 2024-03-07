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
  <div class="input-container">
      <input class="date-selector" type="date" v-model="selectedDate" min="1939-01-01" max="1945-12-31"/>
  </div>

  <div class="about-contact">
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>

</div>

</template>

<script>

export default {
  created() {
      this.updateDate()
      console.log()
  },
  data() {
    const [year, month, day] = this.$route.params.datestring.split('-')
    return {
      selectedDate: `${year}-${month}-${day}`,
    }
  },
  components: { },
  methods: {
    updateDate() {
      const [ year, month, day ] = this.$route.params.datestring.split('-')
      const date = new Date(+year, +month - 1, +day)
      this.$store.dispatch('changeDate', date)
      this.$store.state.selectedDate = date
      this.$store.dispatch('changeDate', date)

      console.log(date)
    }
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

.input-container {
  position: absolute;
  width: 100%;
  text-align: center;
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

  .input-container {
    position: initial;
  }
}

</style>