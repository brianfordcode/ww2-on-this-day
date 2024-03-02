<template>

<input type="date" v-model="selectedDate"/>

    <!-- <timeline :key="selectedDate"/> -->

      <div class="entries-sidebar" :key="selectedDate">

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
      this.updateDate()
  },
  components: { entries, dateBox, timeline, sideBar },
  data() {
    const [year, month, day] = this.$route.params.datestring.split('-')
    console.log(this.$route.params.datestring)
    return {
      selectedDate: `${year}-${month}-${day}`,
    }
  },
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