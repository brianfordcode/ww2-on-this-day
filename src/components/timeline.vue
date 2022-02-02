<template>

<div class="main-container">

  <div class="content">

    <!-- LOGO -->
      <div
        class="logo-arrow-container"
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <div class="logo">
          <router-link to="/">
          <img
            src="../assets/m1-garand.png"
            alt="m1-garand"
            style="height: 20px; width: auto; padding-right: 5px;"
          />
          <h2>World War 2 on this day</h2>
          </router-link>
        </div>
        <img
          :src="arrowIcon"
          alt="arrow-icon"
          v-if="showArrow && this.$route.name === 'Home'"
          style="cursor: pointer; user-select: none;"
          :class="{'arrow-icon': true, 'down': showTimeline}"
          @click="this.showTimeline = !this.showTimeline"
        >
      </div>
    <!-- MAIN TIMELINE -->
    <div
      class="timeline-container" 
      v-if="this.$route.name === 'Home' && showTimeline"
    >
      <!-- DAYS -->
      <div class="days-arrows">
        <!-- PREV ARROW -->
        <img
          class="direction-arrow"
          :src="this.arrowIcon"
          style="transform: rotate(90deg) translateX(1px);"
          @click="startDay = getDayOffset(startDay, -this.numOfDaysInTimeline)"
        />

        <div
          class="days-wrapper"
          v-for="offset in this.numOfDaysInTimeline"
          :key="offset">
          <div
            class="days-box"
            @click="daySelected = getDayOffset(startDay, offset - 1), yearClicked(this.yearSelected)"
            >
            <p>{{ getDayString(getDayOffset(startDay, offset - 1)) }}</p>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            :src="this.arrowIcon"
            v-if="getDayOffset(startDay, offset - 1).getTime() === daySelected.getTime()"
          />
          </div>
        </div>

        <!-- NEXT ARROW -->
        <img
          class="direction-arrow"
          :src="this.arrowIcon"
          style="transform: rotate(-90deg) translateX(-1px);"
          @click="startDay = getDayOffset(startDay, this.numOfDaysInTimeline)"
        />
      </div>

      <!-- YEARS -->
      <div class="year-wrapper">
        <div
          class="year-arrow"
          v-for="year in years"
          :key="year"
        >
          <div
            class="year-box"
            @click="yearClicked(year)"
          >
            <p>{{ year }}</p>
            <img
              draggable="false"
              class="bg"
              :src="getPicForYearBg(year)"
              alt="image"
            />
          </div>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            :src="this.arrowIcon"
            v-if="year == yearSelected"
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
      years: [],
      yearSelected: null,
      daySelected: null,
      startDay: null,
      numOfDaysInTimeline: 7,
      showTimeline: true,
      showArrow: false,
      arrowIcon: "https://img.icons8.com/material-rounded/24/000000/give-way.png"
    }
  },
  created() {
    // GET STARTING YEAR
    const startYear = this.$store.state.start
    const endYear = this.$store.state.end
    //MAKE YEAR ARRAY
    for (let i = startYear ; i <= endYear; i++) { this.years.push(i) }
    this.yearSelected = startYear
    // GET CURRENT DAY IN LONG FORM
    this.startDay = new Date(startYear, new Date().getMonth(), new Date().getDay() - 1)
    console.log(this.startDay)
    // GET CURRENT DAY IN MONTH / DAY FORM AND SET AS DAY SELECTED
    this.daySelected = this.startDay
    // GET BROWSER WIDTH
    window.addEventListener('resize', this.handleResize);
      this.handleResize();
  },
  methods: {
    getDayOffset(date, dayOffset) {
      return new Date(date.getYear(),date.getMonth(), date.getDate() + dayOffset)
    },
    yearClicked(x) {
        this.yearSelected = x
        this.startDay = new Date(x, this.startDay.getMonth(), this.startDay.getDate());
        this.daySelected = new Date(x, this.daySelected.getMonth(), this.daySelected.getDate());
        // DISPATCH DAYSELECTED TO STORE
        this.$store.dispatch('changeDate', this.daySelected)
    },
    getDayString(date) {
      return date.toLocaleDateString('en-us', {month:"long", day:"numeric"})
    },
    getPicForYearBg(year) {
      const pictures = this.$store.state.pictures
      if (year === 1939) {
        return pictures.thirtyNine
      } else if (year === 1940) {
        return pictures.forty
      } else if (year === 1941) {
        return pictures.fortyOne
      } else if (year === 1942) {
        return pictures.fortyTwo
      } else if (year === 1943) {
        return pictures.fortyThree
      } else if (year === 1944) {
        return pictures.fortyFour
      } else if (year === 1945) {
        return pictures.fortyFive
      }
    },
    // AMOUNT OF DAYS IN TIMELINE DEPENDING ON BROWSERWIDTH
    handleResize() {
      let width = window.innerWidth
      // TIMELINE DAYS SHOWN
      width < 1200 ? this.numOfDaysInTimeline = 7 : ''
      width < 800 ? this.numOfDaysInTimeline = 5 : ''
      width < 650 ? this.numOfDaysInTimeline = 3 : ''
      width <= 391 ? this.numOfDaysInTimeline = 2 : ''
      // SHOW/HIDE TIMELINE AND ARROW
      if (width < 600) {
        this.showArrow = true
        this.showTimeline = false
      } else {
        this.showArrow = false
        this.showTimeline = true
      }
    }
  },

}
</script>

<style scoped>

.main-container {
  box-shadow: 0px 0px 33px -20px #000000;
  user-select: none;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.content a, .logo {
  text-decoration: none;
  color: black;
  padding: 10px 0;
  font-family: 'special elite';
  display: flex;
}

.days-arrows {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
}

.direction-arrow {
  cursor: pointer;
  opacity: 0.5;
}

.direction-arrow:hover {
  opacity: 1;
}

.days-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
}

.days-box p {
  background-color: rgba(0,0,0,0.75);
  text-align: center;
  color: white;
  padding: 2px 0;
  cursor: pointer;
  width: 100px;
}

.down {
  transform: rotate(180deg);
}

.year-wrapper {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  flex-wrap: wrap;
}

.year-arrow {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 82px;
  padding: 0 10px;
}

.year-box {
  display: flex;
  justify-content: space-around;
  align-items:center;
  height: 60px;
  width: 120px;
}

.year-box p {
  background-color: rgba(0,0,0,0.75);
  font-size: 26px;
  position: absolute;
  color: white;
  padding: 0 3px;
}

.year-box .bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrow {
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
  margin-top: 2px;
}

</style>