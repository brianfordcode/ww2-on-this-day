<template>
  
    <img
      class="logo"
      @click="this.$router.push(`/${this.$store.state.selectedDate}`)"
      src="/ww2-on-this-day-logo.png"
      alt="logo"
    />

    <div class="container">

        <div class="content">
            <h1>About WW2 on this day</h1>


            <div class="img-text">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/MacArthur_Manila.jpg/220px-MacArthur_Manila.jpg" alt="macarthur">
            <p>
            This site has been crafted from a love and respect of history and everything World War 2.
            <br>
            <br>
            Follow along daily as each of the days events are highlighted.
            </p>
            </div>

        </div>

    </div>

    

</template>

<script>
import dateSelector from '../components/date-selector.vue'

export default {
  components: { dateSelector }
}
</script>

<style scoped>

.container {
    display: flex;
    user-select: none;
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    width: 100%;
    padding: 50px 0;
}

.content {
  width: 100%;
}

.img-text {
    display: flex;
    padding: 0 20px;
}

p {
  padding-left: 20px;
}

@media screen and (max-width: 500px) {
  img {
    width: 200px;
    padding-bottom: 20px;
  }
  .img-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
}

</style>