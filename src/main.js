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
import FoodCategory from "./comps/multi/FoodCategory.vue";

// FA ICONS
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


library.add(faBackward);
library.add(faForward);
library.add(faFacebook);



const app = createApp(App);

app.component("fa-icon", FontAwesomeIcon);
app.component("dividing-bar", DividingBar);
app.component("the-nav", TheNav);
app.component("food-cat", FoodCategory);
app.mount('#app')
