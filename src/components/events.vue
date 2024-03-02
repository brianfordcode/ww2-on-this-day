<template>

    <!-- CAROUSEL -->
    <div class="entire-page">
        
        <!-- MAIN VW PAGE -->
        <div
            ref="mainContainer"
            class="main-container"
            @mousedown="startDrag"
            @mousemove="mouseMove"
        >

            <!-- BOX OF ALL events -->
            <div
                ref="eventContainer"
                :class="{
                    'events-container': true,
                    'not-dragging': !dragging,
                    'dragging': dragging
                }"
                :style="{
                    transform: `translateX(${ position }px)`
                }"
            >
                <!-- INDIVIDUAL EVENTS  -->
                <div
                    v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
                    :key="event"
                    class="event"
                >
                    <!-- DATE -->
                    <div class="event-date">
                            {{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}
                    </div>

                    <!-- PICTURE -->
                    <eventPic class="event-pic"
                        :event="event"
                    />
                    
                    <!-- TEXT -->
                    <div class="event-title">
                        {{ event.title }}
                    </div>
                    
                    <!-- MAP -->
                    <eventMap class="event-map"
                        v-if="event.location.coordinates"
                        :event="event"
                    />

                    <!-- MEDIA -->
                    <eventMedia class="event-media"
                        :event="event"
                    />
                
                </div> 

            </div>
                
        </div>
    </div>

</template>

<script>

import eventMap from './event-details/event-map.vue'
import eventMedia from './event-details/event-media.vue'
import eventPic from './event-details/event-pic.vue'
import eventSearch from './event-details/event-search.vue'

export default {
    components: { eventMap, eventMedia, eventPic, eventSearch },

    mounted() {
        window.addEventListener('mouseup', this.endDrag)
    },
    unmounted() {
        window.removeEventListener('mouseup', this.endDrag)
    },
    methods: {

        startDrag(e) {
            this.dragging = true
            this.lastX = e.clientX
        },

        mouseMove(e) {
            const changeInX = e.clientX - this.lastX

            if (this.dragging) {
                this.position += changeInX
                this.lastX = e.clientX
            }
        },

        endDrag() {
            this.dragging = false

            if (this.position > 0) this.position = 0
            else {
                const tWidth = this.$refs.eventContainer.offsetWidth
                const mWidth = this.$refs.mainContainer.offsetWidth
                // clamp new position so that there is no whitespace to the right
                this.position = Math.max(mWidth - tWidth, this.position)
            }
        }
    },
    data() {
        return {
            dragging: false,
            startingX: 0,
            endingX: 0,
            position: 0,
        }
    }
}

</script>

<style scoped>

.main-container {
    overflow-x: scroll;
    user-select: none;
    position: relative;
}

.main-container::-webkit-scrollbar {
    display: none;
}

.events-container {
    display: flex;
    width: min-content;
    position: relative;
}

.event {
    background-color: white;
    box-shadow: 2px 3px 18px -3px rgba(0,0,0,0.5);
    border-radius: 10px;
    width: 325px;
    height: min-content;
    display: flex;
    flex-direction: column;
    margin: 15px;
}

.event-date {
    margin: 5px 15px;
}

.event-pic {
    margin: 0 auto;
}

.event-title {
    width: 90%;
    margin: 10px auto;
}

.event-map {
    margin: 0 auto;
}

.event-media {
    margin: 15px 15px;
}

.dragging {
    cursor: grabbing;
}

.not-dragging {
    transition: 0.20s transform ease-out;
}

</style>./event-media.vue./event-details/event-search.vue