<template>

<div class="app-container">

  <timeline/>

  <div class="main-content">
    <router-view/>
    <sideBar/>
  </div>

  <foot/>
  
</div>

</template>

<script>
import timeline from './components/timeline/timeline.vue'
import sideBar from './components/sidebar/sidebar.vue'
import foot from './components/foot.vue'

export default {
  components: { timeline, sideBar, foot}
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

.main-content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  
}

</style>