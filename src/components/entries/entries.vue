<template>

<div class="main-container">
    <div
        class="entries-container"
        v-for="event in this.$store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
        :key="event"
        @mouseover="handleHover(event)"
        @mouseleave="showLinks = !showLinks"
    >
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
            
            <div class="links-container">
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
                
                <div class="all-media-container">
                    <!-- BOOKS -->
                    <div class="media-container">
                        <img v-if="event.books[0]" src="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-books-reading-flat-icons-inmotus-design.png"/>
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
                        <img v-if="event.movies[0]" src="https://img.icons8.com/ios-filled/50/000000/clapperboard.png"/>
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

            </div>
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

/* .event-details > *:not(:last-child) {
    margin-bottom: 10px;
} */

.main-container {
    margin-top: 30px;
}

.entries-container {
    /* border: 1px solid blue; */
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 10px;
    display: flex;
    background-color: white;
    transition: .25s ease-in-out;
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

/* EVENT BOX */
.event-pic-container {
    height: 120px;
    width: 150px;
    overflow: hidden;
    transition: .25s ease-in-out;
}

.event-pic-container:hover {
    width: 40%;
    height: 200px;
}

.event-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.event-details {
    margin-left: 10px;
    width: 80%;
    height: 100%;
}


/* SEARCH EVENT BTN */
.search-link-btn {
    border: 1px solid rgba(0,0,0,0.75);
    padding: 2px 5px 2px 2px;
    height: min-content;
    width: max-content;
    text-decoration: none;
    margin: 10px 0 15px 0;
    color: black;
    display: flex;
    align-items: center;
    /* margin-right: 10px; */
    transition: .25s ease-in-out;
}

.search-link-btn:hover {
    color: white;
    background-color: rgba(0,0,0,0.75);
}

.media-container {
    width: min-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    align-items: center
}

.media-wrapper {
    width: 70px;
    height: 100px;
    position: relative;
    transition: .25s ease-in-out;
}

.media {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* .media-wrapper:hover {
    width: 140px;
    height: 200px;
} */

.all-media-container {
    display: flex;
    justify-content: space-around;
}





@media screen and (max-width: 450px) {
    .entries-container {
        flex-direction: column;
    }
    .event-pic-container {
        width: 100%;
        padding-bottom: 10px;
    }
    .event-pic-container:hover {
        width: 100%;
    }
    .event-details {
        margin-left: 0;
        width: 100%;
}
    
}


</style>