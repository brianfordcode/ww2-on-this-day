<template>

  <div id="foot">
    <div class="footer-content">
        <router-link to="/">
            <img
                class="garand"
                src="../assets/m1-garand.png"
                alt="m1-garand"
            />
        </router-link>
        <!-- test comment -->
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>

  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

#foot {
    width: 100%;
    box-shadow: 0px 0px 33px -20px #000000;
    background-color: white;
    font-weight: bold;
    position: absolute;
    bottom: 0;
}

.footer-content {
    padding: 20px 10px 40px 10px;
    max-width: 1200px;
    margin: 0 auto;
}

#foot a {
    text-decoration: none;
    color: black;
    margin: 0 10px;
}

#foot a.router-link-exact-active {
    border-bottom: 3px solid black;
}

.garand {
    height: 20px;
    width: auto;
}

</style>