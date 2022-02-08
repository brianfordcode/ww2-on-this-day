<template>

<div class="sidebar-container">
    <subBox/>
    <ad/>
    <popDays/>
    <ad/>
    <popEvents/>
</div>

</template>

<script>
import subBox from './sub-box.vue'
import ad from './ad.vue'
import popDays from './pop-days.vue'
import popEvents from './pop-events.vue'

export default {
    components: { subBox, ad, popDays, popEvents },
}
</script>

<style>

.box {
    background-color: rgb(238, 238, 238);
}

.box:not(:last-child) {
    margin-bottom: 20px;
}

.sidebar-container {
    margin-left: 20px;
    display: initial;
}

@media screen and (max-width: 900px) {
    .sidebar-container {
        display: none;
    }
}

</style>