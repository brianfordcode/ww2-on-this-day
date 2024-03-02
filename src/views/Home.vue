<template>

  <timeline/>
  
  <entries/>

</template>

<script>
import timeline from '../components/timeline/timeline.vue'
import entries from '../components/entries/entries.vue'

export default {
  components: { entries, timeline },
}
</script>

<style scoped>

</style>