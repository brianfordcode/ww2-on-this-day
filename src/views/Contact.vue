<template>

    <img
      @click="this.$router.push(`/${this.$store.getters.dateForRouter()}`)"
      src="/ww2-on-this-day-logo.png"
      alt="logo"
      style="width: 300px; margin: 10px 0 10px 0; cursor: pointer;"
    />

    <div class="container">

        <div class="content">
            <h1>Contact Us</h1>
        </div>

    </div>

    

</template>

<script>
import dateSelector from '../components/date-selector/date-selector.vue'

export default {
  components: { dateSelector }
}
</script>

<style scoped>

.container {
    display: flex;
    /* user-select: none; */
    max-width: 1200px;
    margin: 0 auto;
}

iframe {
     margin: 25px auto;
}

.content {
    width: 100%;
    position: relative;
}

h1 {
    position: absolute;
    text-align: center;
    width: 100%;
    margin-top: 3%;
}
</style>