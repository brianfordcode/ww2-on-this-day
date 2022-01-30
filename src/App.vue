<template>

<div class="app-container">

  <timeline/>

  <router-view/>

  <foot/>

</div>

</template>

<script>
import timeline from './components/timeline.vue'
import foot from './components/foot.vue'
export default {
  components: {
    foot, timeline
  }

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* border: 1px solid blue; */
}

.app-container {
  height: 100vh;
}
</style>