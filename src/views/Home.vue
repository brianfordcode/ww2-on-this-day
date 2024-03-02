<template>

  <dateSelector/>
  
  <entries/>

</template>

<script>
import dateSelector from '../components/date-selector/date-selector.vue'
import entries from '../components/entries/entries.vue'

export default {
  components: { entries, dateSelector },
}
</script>

<style scoped>

</style>