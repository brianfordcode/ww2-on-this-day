<template>
  <div class="main-container">

    <timeline/>
    
    <div class="entries-sidebar">

      <div class="datebox-entries">
        <dateBox/>
        <entries/>
      </div>

      <sideBar/>

    </div>
    
  </div>
</template>

<script>
import timeline from '../components/timeline/timeline.vue'
import entries from '../components/entries/entries.vue'
import dateBox from '../components/entries/date-box.vue'
import sideBar from '../components/sidebar/sidebar.vue'

export default {
  created() {

    if (this.$route.params.datestring) {
      const [ year, month, day ] = this.$route.params.datestring.split('-')
      const date = new Date(+year, +month - 1, +day)
      this.$store.dispatch('changeDate', date)
      this.$store.state.selectedDate = date

      this.$store.dispatch('changeDate', date)
    } else {
        // const selectedDate = this.$store.state.selectedDate
        // const year = selectedDate.getFullYear()
        // const month = (selectedDate.getMonth() < 10 ? '0' : '') + (selectedDate.getMonth() + 1)
        // const day = (selectedDate.getDate() < 10 ? '0' : '') + selectedDate.getDate()
        // const fullDate = year + '-' + month + '-' + day
        this.$router.push(`/${this.$store.getters.dateForRouter()}`)
    }


    // this.$route.params.datestring ? this.$router.push(`/${this.$route.params.datestring}`) : this.$router.push('/about')


  },
  components: { entries, dateBox, timeline, sideBar },
}
</script>,
    Timeline

<style scoped>


  .datebox-entries {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .entries-sidebar {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
  }

</style>