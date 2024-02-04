<template>
  <div>
    <h1>Weather App</h1>

    <!-- Weather table -->
    <div v-if="weatherData">
      <WeatherTable></WeatherTable>
      <!-- Forecast table -->
      <P-DataTable :value="weatherData.hourly" :paginator="true" :rows="5">
        <P-Column field="timestamp" header="Timestamp" :sortable="true"></P-Column>
        <P-Column field="relative_humidity_2m" header="Relative Humidity (%)" :sortable="true"></P-Column>
        <P-Column field="wind_speed_10m" header="Wind Speed (m/s)" :sortable="true"></P-Column>
      </P-DataTable>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherTable from '../components/WeatherTable.vue'

export default {
  data() {
    return {
      weatherData: null,
      temperatureUnit: 'Celsius', // Assuming a default value
      ApiKey: 'fd5989de6e88c4b85b98b1bf89a4e115',
      lat: 51.50,
      lon: -0.11,
    };
  },
  computed: {
    currentTemperature() {
      if (this.weatherData && this.weatherData.current) {
        const temperatureKey = `temperature_2m_${this.temperatureUnit === 'Celsius' ? 'c' : 'f'}`;
        return this.weatherData.current[temperatureKey];
      }
      return '';
    },
  },
  components: {
    WeatherTable
  },
  watch: {
    temperatureUnit() {
      this.fetchWeatherData();
    },
  },
  methods: {
    async fetchWeatherData() {
      try {
        const _response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.ApiKey}`
        );

        this.weatherData = _response.data;

        console.log("this.weatherData: ", this.weatherData);
  
        if (!_response.data) {
          throw new Error("Network response was not ok");
        }

      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
  mounted() {
    this.fetchWeatherData();
  },
};
</script>
