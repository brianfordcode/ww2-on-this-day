<template>

<div class="main-container">

    <!-- CARD IF NO EVENTS -->
    <div
        style="padding: 25px; display: flex; flex-direction: column; align-items: center;"
        v-if="this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate()).length === 0"
    >
        <p style="font-size: 20px;">No events yet! TEST TEST TEST</p>
        <p>Do you know what happened on {{this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"})}}?</p>
        <router-link to="/contact" target="_blank">Help us out by submitting an event</router-link>
    </div>

    <!-- EVENTS -->
    <div
        class="entries-container"
        v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
    >
        <div class="pic-title">
            <eventPic :event="event"/>
            <eventDetails :event="event"/>
        </div>
        <div class="media-map">
            <media :event="event"/>
            <eventMap 
                v-if="event.location.coordinates"
                :event="event"
            />
        </div>
            <p
        class="citation small-text"
        v-if="event.citation"
    >
    <a :href="event.citation" target="_blank">Citation</a> 
    </p>
    </div>
</div>

</template>

<script>
import eventDetails from './event-details.vue'
import eventMap from './event-map.vue'
import media from './media.vue'
import eventPic from './event-pic.vue'
import searchEvent from './search-event.vue'

export default {
    components: { eventDetails, eventMap, media, eventPic, searchEvent },
}
</script>

<style scoped>

.main-container {
    margin-top: 20px;
    margin-bottom: 80px;
}

.entries-container {
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 15px;
    display: flex;
    background-color: white;
    transition: .25s ease-in-out;
    position: relative;
    display: flex;
    flex-direction: column;
}

.entries-container:not(:last-child) {
    margin-bottom: 10px; 
}

.pic-title {
    display: flex;
    position: relative;
}

.media-map {
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity .75s ease-in-out, max-height .75s ease-in-out
}

.entries-container:hover .media-map {
    max-height: 1000px;
    opacity: 1;
}

.small-text {
    font-size: 10px;
    text-align: right;
    color: rgba(0,0,0,0.75);
    margin-bottom: 3px;
}

@media screen and (max-width: 650px) {
    .pic-title {
        flex-direction: column;
    }
    .media-map {
        flex-direction: column;
        align-items:flex-start;
    }
}
</style>