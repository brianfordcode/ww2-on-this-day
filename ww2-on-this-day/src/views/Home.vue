<template>

  <dateSelector/>

  <events/>

</template>

<script>
import dateSelector from '../components/date-selector.vue'
import events from '../components/events.vue'

export default {
  components: { events, dateSelector },
}
</script>

<style scoped>

</style>