<template>
  <div>
    <!-- Weather table -->
    <div v-if="weatherData">
      <WeatherTable :weatherData="weatherData"></WeatherTable>
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
  mounted() {
    this.fetchWeatherData();
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
          //`https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.ApiKey}`
          `https://api.openweathermap.org/data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this.ApiKey}`
          
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

    getBackgroundImage() {
      /*switch (this.weatherData.) {
          case 'sunny':
          return require(`@/assets/sunny.jpg`);
          case 'rainy':
          return require(`@/assets/rainy.jpg`);
          case 'snowing':
          return require(`@/assets/snow.jpg`);
          // Add more cases for other weather types
          default:
          return require(`@/assets/default.jpg`); // A default image if the weather type is unknown
      }*/
    },
  },
};
</script>
