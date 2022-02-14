<template>
<!-- <router-link to="/"> -->
    <img
        @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
        src="/ww2-on-this-day-logo.png"
        alt="logo"
        style="width: 300px; margin: 10px 0 10px 0; cursor: pointer;"
    />
<!-- </router-link> -->
</template>

<script>

// export default {
//     methods: {
//         handleClick() {
//             this.$store.dispatch('changeDate', new Date(1939, new Date().getMonth(), new Date().getDate()))
//             this.$router.push(`/${this.$store.getters.currentDateForRouter()}`)
//         }
//     }
// }
</script>
