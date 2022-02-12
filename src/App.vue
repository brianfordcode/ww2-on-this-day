<template>

  <div class="app-container">

    <router-view/>

    <foot/>
    
  </div>

</template>

<script>
import foot from './components/foot.vue'

export default {
  components: { foot }
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
  position: relative;
  height: 100%;
}

.app-container {
  height: 100vh;
}

</style>