<template>

<div class="main-container">
    <div
        class="entries-container"
        v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
        @mouseover="handleHover(event)"
        @mouseleave="showLinks = !showLinks"
    >
        <div class="pic-title">
            <div class="event-pic-container">
                <img
                class="event-picture"
                :src="event.mainPicture"
                :alt="event.mainPicture"
                />
            </div>
            <div class="event-details">
                <!-- EVENT DATE -->
                <p style="font-size: 12px; color: rgba(0,0,0,0.75); margin-bottom: 3px;">{{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}</p>
                <!-- EVENT TITLE -->
                <p class="event-title">{{ event.title }}</p>
                <!-- SEARCH THIS EVENT IN GOOGLE LINK -->
                <a
                    class="search-link-btn"
                    :href="`https://www.google.com/search?q=${ event.keywords ? event.keywords : event.title }`"
                    rel="search"
                    target="_blank"
                >
                <img style="height: 20px; width: 20px;" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="google-logo">
                Search This Event
                </a>
            </div>
        </div>
        <div class="links-container">
            
            
            <div class="all-media-container">
                <!-- BOOKS -->
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
            <iframe
                v-if="event.coordinates"
                width="300"
                height="250"
                style="border:0"
                loading="lazy"
                allowfullscreen
                :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyAzuMuGU3ynDz4KU87IzdKY_pXzhUyILoQ&center=${event.coordinates}&zoom=6`">
            </iframe>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            showLinks: true,
        }
    },
    methods: {
        handleHover(event) {
            event ? this.showLinks = true : false
        }
    },
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
    transition: opacity 1s ease-in, max-height .75s ease-in-out
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

.event-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 80%;
    margin-left: 10px;
}


/* SEARCH EVENT BTN */
.search-link-btn {
    border: 1px solid rgba(0,0,0,0.75);
    padding: 2px 5px 2px 2px;
    height: min-content;
    width: max-content;
    margin: 10px 0;
    text-decoration: none;
    color: black;
    display: none;
    align-items: center;
    transition: .25s ease-in-out;
}

.entries-container:hover .search-link-btn {
    display: flex;
}

.search-link-btn:hover {
    color: white;
    background-color: rgba(0,0,0,0.75);
}

.media-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.media-wrapper {
    width: 70px;
    height: 100px;
    position: relative;
    transition: .25s ease-in-out;
    margin: 5px;
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
    transform-origin: bottom;
}
.media-container:first-child .media-wrapper:hover {
    transform-origin: top;
}
.media-container:first-child .media-wrapper:last-child:hover {
    transform-origin: top right;
}
.media-container:last-child .media-wrapper:last-child:hover {
    transform-origin: bottom right;
}
.media-container:first-child .media-wrapper:hover {
    transform-origin: top;
}

@media screen and (max-width: 500px) {
    .pic-title {
        flex-direction: column;
    }
    .event-pic-container {
        padding-bottom: 10px;
    }
    .event-pic-container {
        width: 100%;
    }
    .event-details {
        margin-left: 0;
        width: 100%;
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
}

</style>