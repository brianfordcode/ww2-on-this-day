<template>
<div class="event-details">
    <!-- DATE -->
    <p class="date small-text">{{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}</p>
    <!-- TITLE -->
    <p class="event-title">{{event.title}}</p>
    <!-- SEARCH  -->
    <searchEvent :event="event"/>
</div>
</template>

<script>
import searchEvent from './search-event.vue'
export default {
    props: {
        event: {
            type: Object,
            required: true,
        }
    },
    components: { searchEvent }
}
</script>

<style scoped>

.event-details {
    display: flex;
    flex-direction: column;
}

.small-text {
    font-size: 12px;
    color: rgba(0,0,0,0.75);
}

</style>