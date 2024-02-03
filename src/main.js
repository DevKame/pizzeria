import { createApp } from 'vue'
import App from './App.vue'

// STYLES / COLORS / CLASSES:
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/styles/colors.css";
import "./assets/styles/classes.css";

// CUSTOM COMPS
import DividingBar from "./comps/multi/DividingBar.vue";
import TheNav from "./comps/TheNav.vue";



const app = createApp(App);

app.component("dividing-bar", DividingBar);
app.component("the-nav", TheNav);
app.mount('#app')
