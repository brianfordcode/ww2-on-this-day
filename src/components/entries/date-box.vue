<template>
    <div class="date-box">
        <video :src="this.$store.state.video" loop playsinline autoplay muted playbackRate = "0.5"/>
        <h1 class="date">
            {{ this.$store.state.selectedDate.toLocaleDateString('en-us', {month:"long", day:"numeric", year: "numeric"}) }}
        </h1>
    </div>
</template>

<style scoped>
/* DATE BOX AND TEXT */
.date-box {
  background-color: grey;
  width: 100%;
  height: 125px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
}

.date {
  background-color: rgba(0,0,0,0.75);
  position: absolute;
  text-align: center;
  color: white;
  padding: 5px 15px;
  width: max-content;
  user-select: none;
}

video {
  width: 100%;
  opacity: 0.5;
}

</style>