<template>

<div class="sidebar-container">
    <subBox/>
    <ad/>
    <!-- <popDays/> -->
    <ad/>
    <!-- <popEvents/> -->
    
</div>

</template>

<script>
import subBox from './sub-box.vue'
import ad from '../ads/sidebar-ad.vue'
import popDays from './pop-days.vue'
import popEvents from './pop-events.vue'

export default {
    components: { subBox, ad, popDays, popEvents },
}
</script>

<style>

.sidebar-container {
    margin: 20px;
    display: initial;
}


.sidebar-container > * {
    margin-bottom: 20px;
}

.sidebar-container:last-child {
    margin-bottom: 90px;
}

.box {
    background-color: rgb(238, 238, 238);
    width: 220px;
}


@media screen and (max-width: 925px) {
    .sidebar-container {
        display: none;
    }
}

</style>