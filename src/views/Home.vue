<template>
  <div class="main-container">

    <div class="date-box">
      <img
        draggable="false"
        class="bg"
        src="https://picsum.photos/300/200"
        alt="image"
      />
      <h1 class="date">{{ getSelectedDate }}</h1>
    </div>

    <entries/>

  </div>
</template>

<script>
import entries from '../components/entries.vue'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    entries
  },
  computed: {
    getSelectedDate() {
      return this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"})
    }
  },
}
</script>

<style scoped>

.main-container {
  width: 100%;
}


/* DATE BOX AND TEXT */
.date-box {
  background-color: grey;
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.date {
  background-color: rgba(0,0,0,0.75);
  position: absolute;
  text-align: center;
  color: white;
  padding: 5px 0;
  width: 300px;
  user-select: none;
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}



</style>
