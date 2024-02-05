<template>
    <div v-if="weatherData">
      <P-DataTable :weatherData="weatherData">
        {{ weatherData }}
        <P-Column field="timestamp" header="Timestamp" :sortable="true"></P-Column>
        <P-Column field="relative_humidity_2m" header="Relative Humidity (%)" :sortable="true"></P-Column>
        <P-Column field="wind_speed_10m" header="Wind Speed (m/s)" :sortable="true"></P-Column>
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
        mounted(){
            console.log("WeatherData from Table: ", weatherData);
        }
    }
  };
  </script>
  
  <style scoped>
  /* pridaj štýly podľa potreby */
  </style>
  