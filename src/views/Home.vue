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
  components: { entries, dateBox },
}
</script>

<style scoped>

.main-container {
  width: 100%;
}

</style>