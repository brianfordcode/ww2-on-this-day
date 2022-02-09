<template>

<div class="main-container">
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
            <eventMap :event="event"/>
        </div>
    </div>
    <lowerAd/>
</div>

</template>

<script>
import eventDetails from './event-details.vue'
import eventMap from './event-map.vue'
import media from './media.vue'
import eventPic from './event-pic.vue'
import searchEvent from './search-event.vue'
import lowerAd from '../ads/lower-ad.vue'

export default {
    components: { eventDetails, eventMap, media, eventPic, searchEvent, lowerAd },
}
</script>

<style scoped>

.main-container {
    margin-top: 30px;
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

.entries-container .media-map {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity .5s ease-in-out, max-height .5s ease-in-out
}

.entries-container:hover .media-map {
    max-height: 1000px;
    opacity: 1;
}

.media-map {
    display: flex;
    justify-content: space-between;
    align-items:flex-start;
}

@media screen and (max-width: 600px) {
    .pic-title {
        flex-direction: column;
    }
    .media-map {
        flex-direction: column;
        align-items:flex-start;
    }
}
</style>