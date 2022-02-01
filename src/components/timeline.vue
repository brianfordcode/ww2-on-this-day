<template>


<div class="main-container">

  <div class="content">

    <div class="logo" style="padding: 10px 0;">
      <h2>World War 2 on this day</h2>
    </div>
    
    <div class="timeline-container">

      <div class="days-wrapper">
        <div
          class="days-box"
          v-for="day in dates"
          :key="day"
        >
          <p>{{ day }}</p>
        </div>
        
      </div>
      
      <div class="year-wrapper">
        <div
          class="year-box"
          v-for="year in years"
          :key="year"
        >
          <p>{{ year }}</p>
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

    // ARRAY OF MONTHS
    // const months = Array.from({length: 12}, (item, i) => {
    //   return new Date(0, i).toLocaleString('en-US', {month: 'long'})
    // });

export default {
  data() {
    return {
      years: [],
      dates: [],
    }
  },
  mounted() {
    //           START       END
    for (let i = 1939 ; i <= 1945; i++) { this.years.push(i) }


    // MAKE ARRAY OF DATES

    const getDateArray = function(start, end) {
        var arr = new Array();
        var dt = new Date(start);
        while (dt <= end) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        return arr;
    }

    const startDate = new Date(39, 0, 1); //YY-MM-DD
    const endDate = new Date(45, 11, 31); //YY-MM-DD

    const dateArr = getDateArray(startDate, endDate);

    for (const date of dateArr) {
      const formattedDate = date.toLocaleDateString('en-us', {month:"long", day:"numeric"}) 

      this.dates.push(formattedDate)
    }

  }

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

.days-wrapper {
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  overflow: hidden;
}

.days-box p {
  background-color: black;
  color: white;
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  width: max-content;
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