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
  color: rgb(82, 78, 78);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  position: relative;
  height: 100%;
  background-color: #eeeeee;
}

.app-container {
  min-height: 100vh;
}

</style>