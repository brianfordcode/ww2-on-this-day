<template>
    <div class="ad">
        lower ad
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ad {
    background-color: rgb(180, 180, 180);
    display: none;
    justify-content: space-around;
    align-items: center;
    height: 150px;
    width: 100%;
}

@media screen and (max-width: 925px) {
    .ad {
        display: flex;
    }
}
</style>