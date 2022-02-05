<template>

<div
    class="sidebar-container"
    v-if="showSideBar"
    style="margin-left: 20px;"
>
    <subBox/>
    <ad/>
    <popDays/>
    <ad/>

</div>

</template>

<script>
import subBox from './sub-box.vue'
import ad from './ad.vue'
import popDays from './pop-days.vue'

export default {
    data() {
        return {
            showSideBar: true,
        }
    },
    components: { subBox, ad, popDays },
    created() {
        window.addEventListener('resize', () => {
            window.innerWidth < 800 ? this.showSideBar = false : this.showSideBar = true
        });
    },
}
</script>

<style>

.box {
    background-color: rgb(238, 238, 238);
}

.box:not(:last-child) {
    margin-bottom: 20px;
}

</style>