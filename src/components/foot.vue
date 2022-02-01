<template>

  <div id="foot">
    <div class="footer-content">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

#foot {
    position: absolute;
    bottom: 0;
    width: 100vw;
    box-shadow: 0px 0px 33px -20px #000000;
    
}

.footer-content {
    padding: 20px 10px 30px 10px;
}

#foot a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
    margin: 0 10px;
}

#foot a.router-link-exact-active {
    border-bottom: 3px solid #2c3e50;
}

</style>