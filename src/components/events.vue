<template>

    <!-- CAROUSEL -->

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
                v-for="event in todaysEvents"
                :key="event"
                class="event"
            >
    
                <!-- DATE -->
                <div class="event-date">
                        <p>{{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}</p>
                        <p style="font-size: 12px">{{ todaysEvents.indexOf(event)+1 }} of {{ todaysEvents.length }}</p>
                </div>


                <!-- PICTURE -->
                <eventPic class="event-pic"
                    :event="event"
                />
                
                <!-- TEXT -->
                <p class="event-title">
                    {{ event.title }}
                </p>
                
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
            const tWidth = this.$refs.eventContainer.offsetWidth
            const mWidth = this.$refs.mainContainer.offsetWidth

            if (this.position > 0 || tWidth < mWidth ) this.position = 0
            
            else {
                // clamp new position so that there is no whitespace to the right
                this.position = Math.max(mWidth - tWidth, this.position)
            }
        }
    },
    data() {
        return {
            dragging: false,
            position: 0,
            date: '2019-01-01'
        }
    },
    computed: {
        todaysEvents() {
            return this.$store.getters.eventsOnDay(this.$store.state.selectedDate.getFullYear(), this.$store.state.selectedDate.getMonth(), this.$store.state.selectedDate.getDate())
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
    width: 320px;
    height: min-content;
    display: flex;
    flex-direction: column;
    margin: 15px 10px 10px 10px;
    
}

.event-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    height: 200px;
    width: 90%;
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

@media screen and (max-width: 450px) {

    .event {
        width: 90vw;
    }
}

</style>