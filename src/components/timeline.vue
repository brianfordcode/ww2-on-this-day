<template>


<div class="main-container">

  <div class="content">

    <div class="logo" style="padding: 10px 0;">
      <h2>World War 2 on this day</h2>
    </div>
    
    <div class="timeline-container">

      <div class="days-wrapper">
        <p>days</p>
      </div>
      
      <div class="year-wrapper">
        <div
          class="year-box"
          v-for="year in years"
          :key="year"
        >
          <p>19{{ year }}</p>
          <img
            draggable="false"
            class="bg"
            src="https://picsum.photos/300/200"
            alt="image"
          />
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
      years: ['39','40','41','42','43','44','45'],
    }
  },

}
</script>

<style scoped>

.main-container {
  box-shadow: 0px 0px 33px -20px #000000;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
}

.timeline-container {
  /* display: none; */
}

.year-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
}

.year-box {
  cursor: pointer;
  height: 75px;
  width: 125px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.year-box p {
  background-color: rgba(0,0,0,0.75);
  font-size: 30px;
  position: absolute;
  color: white;
  padding: 0 3px;
}


.year-box .bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>