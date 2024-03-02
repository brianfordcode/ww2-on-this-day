<template>

    <div id="foot">
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

#foot {
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 20px;
}

#foot a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    margin: 10px;
}

</style>