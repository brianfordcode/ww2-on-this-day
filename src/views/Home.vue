<template>
  <div class="main-container">

    <div class="date-box">
      <img
        draggable="false"
        class="bg"
        :src="getDateBgPic(getSelectedDate)"
        alt="image"
      />
      <h1 class="date">{{ selectedDateString }}</h1>
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
      selectedDateString: ''
    }
  },
  components: {
    entries
  },
  computed: {
    getSelectedDate() {
      this.selectedDateString = this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"})
      return this.$store.state.selectedDate
    },

  },
  methods: {
    getDateBgPic(selectedDate) {
      const currentYear = selectedDate.getFullYear()
      const pictures = this.$store.state.pictures
      if (currentYear === 1939) {
        return pictures.thirtyNine
      } else if (currentYear === 1940) {
        return pictures.forty
      } else if (currentYear === 1941) {
        return pictures.fortyOne
      } else if (currentYear === 1942) {
        return pictures.fortyTwo
      } else if (currentYear === 1943) {
        return pictures.fortyThree
      } else if (currentYear === 1944) {
        return pictures.fortyFour
      } else if (currentYear === 1945) {
        return pictures.fortyFive
      }
    }
  }
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
  object-position: 0 30%;
}



</style>
