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

            <!-- BOX OF ALL TESTIMONIALS -->
            <div
                ref="testimonialContainer"
                :class="{
                    'events-container': true,
                    'not-dragging': !dragging,
                    'dragging': dragging
                }"
                :style="{
                    transform: `translateX(${ position }px)`
                }"
            >
                <!-- INDIVIDUAL TESTIMONIALS  -->
                <div
                    v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
                    :key="event"
                    class="event"
                >

                    <!-- <eventDetails :event="event"/> -->
                    {{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}

                    <eventPic :event="event"/>
                    
                    {{ event.title }}
                    
                    <eventMap 
                        v-if="event.location.coordinates"
                        :event="event"
                    />

                    <media :event="event"/>
                
                </div> 

            </div>
                
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
                const tWidth = this.$refs.testimonialContainer.offsetWidth
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

@media screen and (max-width: 700px) {
    .entire-page {
        margin-top: 50px;
    }
}

.events-container {
    display: flex;
    width: min-content;
    position: relative;
}

.event {
    background-color: white;
    border-radius: 10px;
    width: 325px;
    height: min-content;
    display: flex;
    flex-direction: column;
    margin: 15px;
}

.dragging {
    cursor: grabbing;
}

.not-dragging {
    transition: 0.20s transform ease-out;
}

</style>