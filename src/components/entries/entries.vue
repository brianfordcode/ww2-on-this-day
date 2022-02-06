<template>

<div class="main-container">
    <div
        class="entries-container"
        v-for="event in $store.getters.eventsOnDay($store.state.selectedDate.getFullYear(), $store.state.selectedDate.getMonth(), $store.state.selectedDate.getDate())"
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
            <p>{{ event.date }}</p>
            <p class="event-title">{{ event.title }}</p>
            <div class="links-container">
                <!-- SEARCH THIS EVENT IN GOOGLE LINK -->
                <a
                    class="search-link-btn"
                    :href="`https://www.google.com/search?q=${ event.keywords ? event.keywords : event.title }`"
                    rel="search"
                    target="_blank"
                >
                <img style="height: 20px; width: 20px;" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="">
                Search This Event
                </a>
                <!-- BOOKS -->
                <div class="books media-container">
                    <img class="icon" src="https://img.icons8.com/pastel-glyph/64/000000/books.png"/>
                    <div class="books media-wrapper">
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book media-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                    </div>
                </div>
                <!-- MOVIES -->
                <div class="movies media-container">
                    <img class="icon" src="https://img.icons8.com/ios-filled/50/000000/cinema---v1.png"/>
                    <div class="movies media-wrapper">
                        <div class="movies media-box">
                            <img :src="event.books.picture" alt="movie">
                        </div>
                        <div class="movies media-box">
                            <img :src="event.books.picture" alt="movie">
                        </div>
                        <div class="movies media-box">
                            <img :src="event.books.picture" alt="movie">
                        </div>
                        <div class="movies media-box">
                            <img :src="event.books.picture" alt="movie">
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
            showLinks: true
        }
    },
    methods: {
        handleHover(event) {
            event ? this.showLinks = true : false
        }
    }
}
</script>

<style scoped>

.event-details > *:not(:last-child) {
    margin-bottom: 10px;
}

.main-container {
    margin-top: 30px;
}

.entries-container {
    box-shadow: 0px 0px 33px -20px #000000;
    padding: 10px;
    display: flex;
    max-height: 300px;
    background-color: white;
    transition: .25s ease-in-out;
}

.entries-container:not(:last-child) {
    margin-bottom: 10px; 
}

.entries-container:hover .links-container {
    height: 200px;
    opacity: 1;
}

.entries-container .links-container {
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: opacity 1s ease-in-out, height .5s ease-in-out;
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
    width: 80%;
}

.links-container {
    /* margin-top: 5px; */
    display: flex;
    /* justify-content: space-around; */
    /* border: 1px solid; */
    /* position: relative; */
}

.links-container > *:not(:last-child) {
    margin-right: 50px;
}

.search-link-btn {
    border: 1px solid rgba(0,0,0,0.75);
    padding: 2px 5px 2px 2px;
    height: min-content;
    width: max-content;
    text-decoration: none;
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

.icon {
    width: auto;
    height: 40px;
}

.media-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: min-content;
    grid-gap: 10px;
    /* border: 1px solid; */
    /* margin-right: 50px; */
}

.media-box {
    height: 70px;
    width: 50px;
    background-color: grey;
}

.media-box img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}



@media screen and (max-width: 600px) {
    .entries-container {
        height: max-content;
    }
}


</style>