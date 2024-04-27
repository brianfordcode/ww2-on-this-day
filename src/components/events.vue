<template>

    <!-- CAROUSEL -->

    <!-- MAIN VW PAGE -->
    <!-- test -->
    <div style="padding: 20px;" v-if="$store.state.loading">Getting Events...</div>
    <div class="no-events event" v-else-if="$store.getters.eventsOnDay().length === 0" style="">There are no events on {{ new Date(new Date(this.$store.state.selectedDate).setDate(new Date(this.$store.state.selectedDate).getDate() + 1)).toDateString() }}.</div>

    <div
        v-else
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
                transform: `translateX(${ position }px)`,
            }"
        >
            <!-- INDIVIDUAL EVENTS  -->
            <div
                v-for="event in todaysEvents"
                :key="event"
                class="event"
                @click="goToLink"
            >
    
                <!-- DATE -->
                <div class="event-date">
                        <p>{{ new Date(new Date(this.$store.state.selectedDate).setDate(new Date(this.$store.state.selectedDate).getDate() + 1)).toDateString() }}</p>
                        <p style="font-size: 12px">{{ todaysEvents.indexOf(event)+1 }} of {{ todaysEvents.length }}</p>
                </div>

                <!-- PICTURE -->
                <eventPic :event="event"/>
                
                <!-- TEXT -->
                <!-- <p class="event-title"> {{ event.title }} </p> -->

                <p class="event-title" v-html="formatWithKeywords(event.title, event.keywords)"></p>
                
                <!-- MAP -->
                <eventMap :event="event"/>

                <!-- MEDIA -->
                <eventMedia :event="event"/>
            
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
            if (!this.$refs.mainContainer) return

            this.dragging = true
            this.lastX = e.clientX
        },
        mouseMove(e) {
            if (!this.$refs.mainContainer) return
            
            const changeInX = e.clientX - this.lastX

            if (this.dragging) {
                this.position += changeInX
                this.lastX = e.clientX
            }
        },
        endDrag() {
            if (!this.$refs.mainContainer) return

            this.dragging = false
            const tWidth = this.$refs.eventContainer.offsetWidth
            const mWidth = this.$refs.mainContainer.offsetWidth

            if (this.position > 0 || tWidth < mWidth ) {
                this.position = 0
            } else {
                // clamp new position so that there is no whitespace to the right
                this.position = Math.max(mWidth - tWidth, this.position)
            }
        },
        formatWithKeywords(text, keywords) {
            let formattedText = text;
            keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, "gi");
            formattedText = formattedText.replace(
                regex,
                `<span class="keyword" style="color: blue; cursor: pointer;">${keyword}</span>`
                );
            });
            return formattedText;
        },
        goToLink(event) {
            if (event.target.classList.contains("keyword")) {
                const keyword = event.target.textContent;
                window.open(`https://www.google.com/search?q=${keyword}`);
            }
        }
    },
    data() {
        return {
            dragging: false,
            position: 0,
        }
    },
    computed: {
        todaysEvents() {
            return this.$store.getters.eventsOnDay()
        },
    }
}

</script>

<style scoped>

.keyword {
    color: blue
}

.main-container {
    overflow-x: scroll;
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
    margin: 5px 15px;
}

.event-title {
    width: 90%;
    margin: 10px auto;
}

.dragging {
    cursor: grabbing;
}

.not-dragging {
    transition: 0.20s transform ease-out;
}

.no-events {
    margin: 50px auto;
    padding: 20px;
    width: max-content;
}

</style>