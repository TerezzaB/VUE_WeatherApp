import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import PrimeVue and its styles
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'; // Import PrimeVue CSS
import 'primeicons/primeicons.css'; // Import PrimeIcons CSS

// Import PrimeVue components that you want to use
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Divider from 'primevue/divider';


const app = createApp(App);

// Use PrimeVue globally
app.use(PrimeVue);

// Register PrimeVue components globally
app.component('P-DataTable', DataTable);
app.component('P-Column', Column);
app.component('P-Button', Button);
app.component('P-Divider', Divider);

// Use router
app.use(router);

// Mount the app
app.mount('#app');
