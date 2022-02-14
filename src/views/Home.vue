<template>

    <timeline/>

      <div class="entries-sidebar">

        <div class="datebox-entries">
          <dateBox/>
          <entries/>
        </div>

        <sideBar/>
        
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
        this.$router.push(`/${this.$store.getters.dateForRouter()}`)
    }

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
    margin: 20px;
  }

  .entries-sidebar {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

</style>