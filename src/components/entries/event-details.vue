<template>
<div class="event-details">
    <!-- EVENT DATE -->
    <p style="font-size: 12px; color: rgba(0,0,0,0.75); margin-bottom: 3px;">{{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}</p>
    <!-- EVENT TITLE -->
    <p class="event-title">{{event.title}}</p>
    <!-- SEARCH THIS EVENT IN GOOGLE LINK -->
    <a
        class="search-link-btn"
        :href="`https://www.google.com/search?q=${ event.keywords ? event.keywords : event.title }`"
        rel="search"
        target="_blank"
    >
        <img
            style="height: 20px; width: 20px;"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt="google-logo"
        >
        <p>Search This Event</p>
    </a>
</div>
</template>

<script>
export default {
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>

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
@media screen and (max-width: 600px) {
    .event-details {
        margin-left: 0;
        width: 100%;
    }
}


</style>