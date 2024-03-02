<template>

<div class="main-container">
  <div class="content">
        <!-- LOGO -->
        <logo/>
        <!-- DATE SELECTOR -->
        <input type="date" v-model="selectedDate"/>
  </div>
</div>

</template>

<script>
import logo from "./logo.vue"

export default {
  created() {
      this.updateDate()
  },


  data() {
    const [year, month, day] = this.$route.params.datestring.split('-')
    console.log(this.$route.params.datestring)
    return {
      selectedDate: `${year}-${month}-${day}`,
    }
  },
  components: { logo },
  methods: {
    updateDate() {
      const [ year, month, day ] = this.$route.params.datestring.split('-')
      const date = new Date(+year, +month - 1, +day)
      this.$store.dispatch('changeDate', date)
      this.$store.state.selectedDate = date
      this.$store.dispatch('changeDate', date)
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
  width: 100%;
  z-index: 10000000;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.timeline-container {
  display: initial;
}
</style>