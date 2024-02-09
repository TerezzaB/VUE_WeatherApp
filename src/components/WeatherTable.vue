<template>
    <div v-if="weatherData">
        <h3>{{ currentCity }}</h3>
        <h1>{{ currentWeather }}</h1>

        <P-DataTable :weatherData="weatherData">
            <P-Column field="date"></P-Column>
            <P-Column field="hour"></P-Column>
            <P-Column field="description"></P-Column>
            <P-Column field="icon"></P-Column>
        </P-DataTable>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      weatherData: {
        weatherData: null,
        required: true,
      },
    },

    methods: {
        getWeatherForecast() {
            for (let i in this.weatherData.list){
                console.log("New index: ", this.weatherData.list[i]);
            }
        }
    },

    data(){
        return {
            currentWeather: this.weatherData.list[0].weather[0].description,
            currentCity: this.weatherData.city.name
        }
    },

    mounted() {
        console.log("Weather: ", this.weatherData.list[0].weather[0].description);
        this.getWeatherForecast();
    },
  };
  </script>
  
  <style scoped>

  </style>
  