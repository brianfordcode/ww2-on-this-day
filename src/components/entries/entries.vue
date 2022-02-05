<template>


<div class="main-container">
    <div
        class="entries-container"
        v-for="event in $store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
        @mouseover="handleHover(event)"
        @mouseleave="showLinks = false"
    >
        <div class="event-pic-container">
            <img
            class="event-picture"
            :src="event.mainPicture"
            :alt="event.mainPicture"
            />
        </div>
        <div class="event-details">
            <p class="event-title">{{ event.title }}</p>
            <div
                class="links-container"
                v-if="showLinks"
            >
                <p>books</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showLinks: false,
        }
    },
    methods: {
        handleHover(event) {
            console.log(event)
            event ? this.showLinks = true : false
        }
    }
}
</script>

<style scoped>

.main-container {
    margin-top: 30px;
}

.entries-container {
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 10px;
    display: flex;
    height: 100px;
    background-color: white;
    transition: .25s ease-in-out;
}

.entries-container:not(:last-child) {
    margin-bottom: 15px; 
}

.entries-container:hover {
    height: 175px;
}

/* EVENT BOX */
.event-pic-container {
    height: 100%;
    width: 150px;
    overflow: hidden;
    transition: .25s ease-in-out;
}

.event-pic-container:hover {
    width: 40%;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-details {
    margin-left: 10px;
    width: 75%;
}

.links-container {
    margin-top: 5px;
}



</style>