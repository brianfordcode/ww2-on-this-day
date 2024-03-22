<template>

    <GoogleMap
        api-key="AIzaSyAzuMuGU3ynDz4KU87IzdKY_pXzhUyILoQ"
        style="width: 100%; height: 700px"
        :center="{ lat: 30, lng: -10 }"
        :zoom="2.35"
    >
        <Marker
            v-for="(location, i) in locations"
            :key="i"
            :options="{ position: location, label: `${i+1}` }"
        /> 
    </GoogleMap>



</template>
  
<script>
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map'

export default {

    components: { GoogleMap, Marker, MarkerCluster },

    data() {
        return {
            date: null,
            locations: [
                { lat: 39.89979826448187, lng: 10.892903923808237 },
                { lat: 51.32648231820734, lng: 18.029571802640568 },
                { lat: 58.5705351552613, lng: 15.041293964508027 },
            ]
        };
    }
}
</script>

<style>



</style>