<template>
    <div class="date-box">
        <img
            draggable="false"
            class="bg"
            :src="$store.getters.getPicForBg(this.$store.state.selectedDate.getFullYear())"
            alt="image"
        />
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
}

.date {
  background-color: rgba(0,0,0,0.75);
  position: absolute;
  text-align: center;
  color: white;
  padding: 5px 0;
  width: 300px;
  user-select: none;
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  object-position: 0 30%;
}

</style>