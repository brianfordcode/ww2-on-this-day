<template>
  <div class="main-container">

    <div class="date-box">
      <h1 class="date">{{ getSelectedDate }}</h1>
      <img
        draggable="false"
        class="bg"
        src="https://picsum.photos/300/200"
        alt="image"
      />
    </div>
    
    <br/>

    <!-- <p>{{ $store.state.post }}S for {{getSelectedDate}}</p> -->

    <div
      v-for="event in $store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate() )"
      :key="event"
    >
    <div
      class="event-pic-container"
    >
      <img
        class="event-picture"
        :src="event.picture"
        :alt="event.picture"
      />
    </div>
    <p>{{ event.title }}</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
    }
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
}


.event-pic-container {
  height: 100px;
  width: 100px;
  overflow: hidden;
}

.event-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}







</style>
