<template>

<div class="main-container">
  <div class="content">
      <div
        class="logo-arrow-container"
        style="display: flex; justify-content: space-between; align-items: center;"
      >
        <!-- LOGO -->
        <logo style="padding: 10px; 0 5px 0"/>
        <!-- ARROW ICON WHEN SMALL SCREEN -->
        <img
          :src="arrowIcon"
          alt="arrow-icon"
          draggable = "false"
          v-if="showArrow && this.$route.name === 'Home'"
          style="cursor: pointer;"
          :class="{'down': showTimeline}"
          @click="this.showTimeline = !this.showTimeline"
        />
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
          draggable = "false"
          style="transform: rotate(90deg); translateX(1px);"
          @click="startDate = getDayOffset(startDate, -this.numOfDaysInTimeline)"
        />
        <div
          class="days-wrapper"
          v-for="offset in this.numOfDaysInTimeline"
          :key="offset">
          <div
            class="days-box"
            @click="dateSelected = getDayOffset(startDate, offset - 1), yearClicked(this.yearSelected)"
            >
            <p>{{ getDayString(getDayOffset(startDate, offset - 1)) }}</p>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            :src="this.arrowIcon"
            draggable = "false"
            v-if="getDayOffset(startDate, offset - 1).getTime() === dateSelected.getTime()"
          />
          </div>
        </div>
        <!-- NEXT ARROW -->
        <img
          class="direction-arrow"
          :src="this.arrowIcon"
          draggable = "false"
          style="transform: rotate(-90deg); translateX(-1px);"
          @click="startDate = getDayOffset(startDate, this.numOfDaysInTimeline)"
        />
      </div>
      <!-- YEARS -->
      <div class="year-wrapper">
        <div
          class="year-arrow"
          v-for="year in $store.getters.yearTimeline()"
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
              :src="$store.getters.getPicForYearBg(year)"
              alt="image"
            />
          </div>
          <!-- SELECTOR ARROW -->
          <img
            class="arrow"
            draggable = "false"
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
import logo from "./logo.vue"

export default {
  data() {
    return {
      yearSelected: this.$store.state.start,
      dateSelected: new Date(this.$store.state.start, new Date().getMonth(), new Date().getDay() - 1),
      startDate: this.$store.state.selectedDate,
      numOfDaysInTimeline: 7,
      showTimeline: true,
      showArrow: false,
      arrowIcon: "https://img.icons8.com/material-rounded/24/000000/give-way.png"
    }
  },
  components: { logo },
  created() {
    // GET BROWSER WIDTH
    window.addEventListener('resize', this.handleResize);
      this.handleResize();
      
  },
  methods: {
    getDayOffset(date, dayOffset) {
      return new Date(date.getYear(),date.getMonth(), date.getDate() + dayOffset)
    },
    yearClicked(clickedYear) {
        this.yearSelected = clickedYear
        this.startDate = new Date(clickedYear, this.startDate.getMonth(), this.startDate.getDate());
        this.dateSelected = new Date(clickedYear, this.dateSelected.getMonth(), this.dateSelected.getDate());
        // DISPATCH dateSelected TO STORE
        this.$store.dispatch('changeDate', this.dateSelected)
    },
    getDayString(date) {
      return date.toLocaleDateString('en-us', {month:"long", day:"numeric"})
    },
    // AMOUNT OF DAYS IN TIMELINE & SHOW/HIDE TIMELINE AND ARROW DEPENDING ON BROWSERWIDTH
    handleResize() {
      let width = window.innerWidth
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