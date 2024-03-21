<template>

  <div class="app-container">

    <router-view/>

  </div>

</template>

<script>

export default {
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}

#app {
  /* font-family: 'Courier New', Courier, monospace; */
  font-family: "Courier Prime", monospace;
  color: rgb(60, 60, 67); /* rgb(82, 78, 78) */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 12px;
  position: relative;
  height: 100%;
  background-color: #f5f5f5;
}

.app-container {
  min-height: 100vh;
}

</style>