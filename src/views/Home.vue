<template>
  <div class="main-container">

    <dateBox/>

    <entries/>

  </div>
</template>

<script>
import entries from '../components/entries/entries.vue'
import dateBox from '../components/entries/date-box.vue'

export default {
  created() {
    // console.log(this.$route.params.datestring)
    // const [ year, month, day ] = this.$route.params.datestring.split('-')
    // const date = new Date(+year, +month - 1, +day)
    // this.$store.dispatch('changeDate', date)
  },
  components: { entries, dateBox },
}
</script>

<style scoped>

.main-container {
  width: 100%;
}

</style>