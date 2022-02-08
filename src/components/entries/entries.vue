<template>

<div class="main-container">
    <div
        class="entries-container"
        v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
    >
        <div class="pic-title">
            <div class="event-pic-container">
                <img
                class="event-picture"
                :src="event.mainPicture"
                :alt="event.mainPicture"
                />
            </div>

            <eventDetails :event="event"/>

        </div>
        <div class="links-container">
            <div class="media-map">
                <!-- BOOKS -->
                <div class="all-media-container">
                    <div class="media-container">
                        <img
                            v-if="event.books[0]"
                            src="https://img.icons8.com/external-flat-icons-inmotus-design/50/000000/external-books-reading-flat-icons-inmotus-design.png"
                            draggable="false"
                        />
                        <div
                            class="books media-wrapper"
                            v-for="book in event.books"
                            :key="book"
                        >
                            <a :href="book.link" target="_blank">
                                <img
                                    class="media"
                                    :src="book.picture"
                                    :alt="book.title"
                                >
                            </a>
                        </div>
                    </div>
                    <!-- MOVIES -->
                    <div class="media-container">
                        <img
                            v-if="event.movies[0]"
                            src="https://img.icons8.com/ios-filled/50/000000/clapperboard.png"
                            draggable="false"
                        />
                        <div
                            class="movies media-wrapper"
                            v-for="movies in event.movies"
                            :key="movies"
                        >
                            <a :href="movies.link" target="_blank">
                                <img
                                    class="media"
                                    :src="movies.picture"
                                    :alt="movies.title"
                                >
                            </a>
                        </div>
                    </div>
                </div>
                <!-- MAP -->
                <eventMap :event="event"/>
           </div>
            
        </div>
    </div>
</div>
</template>

<script>
import eventDetails from './event-details.vue'
import eventMap from './event-map.vue'

export default {
    components: { eventDetails, eventMap },
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

.entries-container .links-container {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity .5s ease-in-out, max-height .5s ease-in-out
}

.entries-container:hover .links-container {
    max-height: 1000px;
    opacity: 1;
}

.entries-container:hover .event-pic-container {
    height: 100%;
    width: 350px;
}

.pic-title {
    display: flex;
    position: relative;
}

.media-map {
    display: flex;
    justify-content: flex-end;
    align-items:flex-end;
}

/* EVENT BOX */
.event-pic-container {
    height: 120px;
    width: 150px;
    overflow: hidden;
    transition: .25s ease-in-out;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.media-wrapper {
    width: 80px;
    height: 110px;
    position: relative;
    transition: .25s ease-in-out;
    margin: 5px 10px 0 5px;
    overflow: hidden;
}

.media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.media-wrapper:hover {
    transform: scale(2);
    z-index: 2;
}
.media-container:last-child .media-wrapper:hover {
    transform-origin: bottom left;
}
.media-container:first-child .media-wrapper:hover {
    transform-origin: top left;
}
@media screen and (max-width: 768px) {
    .media-wrapper {
        width: 60px;
        height: 90px;
    }
}
@media screen and (max-width: 600px) {
    .pic-title {
        flex-direction: column;
    }
    .event-pic-container {
        padding-bottom: 10px;
        width: 100%;
        height: 150px;
    }
    .media-wrapper {
        width: 60px;
        height: 90px;
    }
    .media-wrapper:hover {
        transform: scale(2.25);
    }
    .entries-container:hover .event-pic-container{
        width: 100%;
        height: 100%;
    }
    .media-map {
        flex-direction: column;
        align-items:center;
    }
    .all-media-container {
        margin-bottom: 10px;
    }
    .media-wrapper:hover {
        transform: scale(1);
        z-index: 2;
    }
}
</style>