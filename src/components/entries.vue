<template>


<div class="main-container">
    <div
        class="entries-container"
        v-for="event in $store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
    >
    <div
        class="event-pic-container"
    >
        <img
        class="event-picture"
        :src="event.mainPicture"
        :alt="event.mainPicture"
        />
    </div>
    <div class="event-details">
        <p>{{ event.title }}</p>
    </div>
    

    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.main-container {
    margin-top: 30px;
    /* display: flex; */
    
}

.entries-container {
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 10px;
    margin-bottom: 30px; 
    display: flex;
    /* border: 1px solid black; */
}


/* EVENT BOX */
.event-pic-container {
  height: 100px;
  width: 200px;
  overflow: hidden;
}

.event-picture {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-details {
    margin-left: 10px;
}

</style>