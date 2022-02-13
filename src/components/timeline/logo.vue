<template>
    <img
        @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
        src="/ww2-on-this-day-logo.png"
        alt="logo"
        style="width: 300px; margin: 10px 0 10px 0; cursor: pointer;"
    />
</template>
