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
            <p class="event-title">{{ event.title }}</p>
            <div class="links-container">
                <div class="books-container">
                    <img class="icon" src="https://img.icons8.com/pastel-glyph/64/000000/books.png"/>
                    <div class="books-wrapper">
                        <div class="book-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book-box">
                            <img :src="event.books.picture" alt="book">
                        </div>
                        <div class="book-box">
                            <img :src="event.books.picture" alt="book">
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
            console.log(event)
            event ? this.showLinks = true : false
        }
    }
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
    max-height: 300px;
    background-color: white;
    transition: .25s ease-in-out;
}

.entries-container:not(:last-child) {
    margin-bottom: 15px; 
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
    width: 75%;
}

.links-container {
    margin-top: 5px;
}

.icon {
    width: 40px;
    height: auto;
}

.books-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5;
    border: 1px solid;
}

.book-box {
    height: 70px;
    width: 50px;
    background-color: grey;
}

.book-box img {
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