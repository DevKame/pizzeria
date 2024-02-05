<template>
  <the-header></the-header>
  <the-nav></the-nav>
  <dividing-bar></dividing-bar>
  <div class="openingHours text-prim d-flex flex-column justify-content-start align-items-center border border-white">
    <dividing-bar></dividing-bar>
    <div class="mt-3 d-flex justify-content-between align-items-center">
      <p>Di. - Sa.</p>
      <p>17:00 - 22:30 Uhr</p>
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <p>So. & Feiertage</p>
      <p>15:00 - 22:00 Uhr</p>
    </div>
    <div class="mb-3 d-flex justify-content-between align-items-center">
      <p>Montag (außer Feiertage) Ruhetag</p>
    </div>
    <div class="mb-3 d-flex justify-content-between align-items-center">
      <a href="https://www.facebook.com/PizzeriaLaPalmaEdewecht" target="_blank">
        <fa-icon icon="fa-brands fa-facebook" size="xl" class="me-2"></fa-icon>
        Pizzeria La Palma Edewecht
      </a>
    </div>
    <dividing-bar></dividing-bar>
  </div>
  <food-cat v-if="displayCat === 'vorspeisen'" headline="VORSPEISEN" :items="vorspeisen"></food-cat>
  <food-cat v-if="displayCat === 'salate'" headline="SALATE"
  sub-brown="Alle Salate mit Tomaten, Gurke, Eisbergsalat, Zwiebeln, Peperoni, Mais, Käse & Spezialdressing"
  sub-red="Alle Salate mit Brot auf Wunsch"
  :items="salate"></food-cat>
  <food-cat v-if="displayCat === 'kebabs'" headline="KEBAB / GYROS"
  :items="kebabs"></food-cat>
  <food-cat v-if="displayCat === 'baguettes'" headline="BAGUETTES"
  sub-brown="Alle Baguettes mit Spezialdressing"
  :items="baguettes"></food-cat>
</template>

<script setup>

import { ref } from "vue";
import TheHeader from "./comps/TheHeader.vue";

const displayCat = ref("vorspeisen");
const vorspeisen = ref(
  [
    {
      number: 1,
      title: "<span>Portion Oliven<sup>5</sup></span>",
      surprise: false,
      oven: false,
      price: "3,00",
    },
    {
      number: 2,
      title: "<span>Portion Peperoni</span>",
      surprise: false,
      oven: false,
      price: "3,00",
    },
    {
      number: 3,
      title: "<span>Portion Zaziki<sup>e</sup> <span class='i_sm'>oder</span> Spezialdressing</span>",
      surprise: false,
      oven: false,
      price: "3,50",
    },
    {
      number: 4,
      title: "<span>Portion Krautsalat</span>",
      surprise: false,
      oven: false,
      price: "3,00",
    },
    {
      number: 5,
      title: "<span>Portion Weißkäse<sup>e</sup> <span class='i_sm'>mit Beilage</span></span>",
      surprise: false,
      oven: false,
      price: "3,90",
    },
  ]
);
const salate = ref(
  [
    {
      number: 6,
      title: "Kleiner Salat",
      additional: "Paprika & Oliven<sup>5</sup>",
      surprise: false,
      oven: false,
      price: "5,50",
    },
    {
      number: 7,
      title: "Kleiner gemischter Thunfischsalat",
      additional: "Paprika, Oliven, Ei<sup>c</sup>, Thunfisch<sup>d,n</sup> & Weißkäse<sup>e</sup>",
      surprise: false,
      oven: false,
      price: "6,50",
    },
    {
      number: 8,
      title: "Kleiner gemischter Thunfischsalat",
      additional: "Paprika, Oliven, Ei<sup>c</sup>, Salami<sup>1,2,3,4</sup>, Formfleischvorderschinken<sup>1,2,4</sup> Thunfisch<sup>d,n</sup> & Weißkäse<sup>e</sup>",
      surprise: false,
      oven: false,
      price: "8,00",
    },
    {
      number: 9,
      title: "Uovo Salat",
      additional: "Ei<sup>c</sup> & Oliven",
      surprise: false,
      oven: false,
      price: "6,00",
    },
  ]
);
const kebabs = ref(
  [
    {
      number: 10,
      title: "Kebabburger",
      additional: "Kebab<sup>1,2m,n</sup>(Drehspieß), Krautsalat, Tomaten, Gurken, Zaziki<sup>e</sup> & Fladenbrot<sup>a</sup>",
      surprise: false,
      oven: false,
      price: "4,50",
    },
    {
      number: 11,
      title: "Salatburger",
      additional: "Weißkäse<sup>e</sup>, Krautsalat, Tomaten & Gurken",
      surprise: false,
      oven: false,
      price: "4,50",
    },
    {
      number: 12,
      title: "Kebabteller",
      additional: "Kebab<sup>1,2m,n</sup>(Drehspieß), Krautsalat, Zwiebeln, Zaziki<sup>e</sup> & Pommes<sup>a</sup>",
      surprise: false,
      oven: false,
      price: "9,50",
    },
    {
      number: 13,
      title: "Kebabteller Spezial",
      additional: "Kebab<sup>1,2m,n</sup>(Drehspieß), Gyros<sup>1,2</sup>, Zwiebeln, Zaziki<sup>e</sup> & Pommes<sup>a</sup>",
      surprise: false,
      oven: false,
      price: "9,50",
    },
    {
      number: 14,
      title: "Kebab",
      additional: "<sup>1,2m,n</sup>",
      surprise: true,
      oven: false,
      price: "9,50",
    },
    {
      number: "14a",
      title: "Kebab überbacken",
      additional: "Kebab<sup>1,2m,n</sup>(Drehspieß), Zwiebeln, scharfe Tomatensauce, Sahne & Käse<sup>e</sup> überbacken",
      surprise: false,
      oven: true,
      price: "8,50",
    },
    {
      number: 15,
      title: "Gyros Pita",
      additional: "Gyros<sup>1,2</sup>, Zaziki<sup>e</sup> & Krautsalat",
      surprise: false,
      oven: false,
      price: "5,50",
    },
    {
      number: 16,
      title: "Gyros - kleine Portion",
      additional: "Gyros<sup>1,2</sup>, Zaziki<sup>e</sup>, Krautsalat, Zwiebeln, Pommes & Fladenbrot<sup>a</sup>",
      surprise: false,
      oven: false,
      price: "6,90",
    },
    {
      number: 17,
      title: "Gyros - große Portion",
      additional: "Gyros<sup>1,2</sup>, Zaziki<sup>e</sup>, Krautsalat, Zwiebeln & Pommes",
      surprise: false,
      oven: false,
      price: "9,50",
    },
    {
      number: 18,
      title: "La Palma - Teller",
      surprise: true,
      oven: false,
      price: "9,50",
    },
    {
      number: 19,
      title: "Gyros überbacken",
      additional: "Gyros<sup>1,2</sup>, Zwiebeln, scharfe Tomatensauce, Sahne & Käse<sup>e</sup> überbacken",
      surprise: false,
      oven: true,
      price: "8,50",
    },
  ]
);
const baguettes = ref(
  [
    {
      number: 20,
      title: "Käse Baguette vegetarisch<sup>a</sup>",
      additional: "Käse<sup>e</sup>, Tomaten, Gurken & Salat",
      surprise: false,
      oven: false,
      veggie: true,
      price: "5,50",
    },
    {
      number: 21,
      title: "Schinken-Baguette<sup>a</sup>",
      additional: "Käse<sup>e</sup>, Formfleischvorderschinken<sup>1,2,4</sup>, Tomaten, Gurken & Salat",
      price: "6,00",
    },
    {
      number: 22,
      title: "Salami-Baguette<sup>a</sup>",
      additional: "Salami<sup>1,2,3,4</sup>, Käse<sup>e</sup>, Tomaten, Gurken & Salat",
      price: "6,00",
    },
    {
      number: 23,
      title: "Hawaii-Baguette<sup>a</sup>",
      additional: "Formfleischvorderschinken<sup>1,2,4</sup>, Ananas, Käse<sup>e</sup> & Salat",
      price: "6,00",
    },
    {
      number: 24,
      title: "Champignon-Baguette<sup>a</sup>",
      additional: "Champignons, Ei<sup>c</sup>, Käse<sup>e</sup> & Salat",
      price: "6,00",
    },
    {
      number: 25,
      title: "Schinken-Champignon-Baguette<sup>a</sup>",
      additional: "Formfleischvorderschinken<sup>1,2,4</sup>, Champignons, Käse<sup>e</sup> & Salat",
      price: "6,50",
    },
    {
      number: 26,
      title: "Salami-Champignon-Baguette<sup>a</sup>",
      additional: "Salami<sup>1,2,3,4</sup>, Champignons, Käse<sup>e</sup> & Salat",
      price: "6,50",
    },
    {
      number: 27,
      title: "Thunfisch-Baguette<sup>a</sup>",
      additional: "Thunfisch<sup>d,n</sup>, Käse<sup>e</sup>, Zwiebeln, Tomaten & Salat",
      price: "6,50",
    },
    {
      number: 28,
      title: "Spezial-Baguette<sup>a</sup>",
      additional: "Formfleischvorderschinken<sup>1,2,4</sup>, Tomaten, Gurken & Salat",
      price: "6,50",
    },
    {
      number: 29,
      title: "Schinken-Thunfisch-Baguette<sup>a</sup>",
      additional: "Käse<sup>e</sup>, Formfleischvorderschinken<sup>1,2,4</sup>, Thunfisch<sup>d,n</sup>, Tomaten & Salat",
      price: "7,00",
    },
    {
      number: "29a",
      title: "Gyros-Baguette<sup>a</sup>",
      additional: "Gyros<sup>1,2</sup>, Käse<sup>e</sup>, Zwiebeln & Salat",
      price: "7,50",
    },
    {
      number: "29b",
      title: "Kebab-Baguette<sup>a</sup>",
      additional: "Kebab<sup>1,2m,n</sup>(Drehspieß), Käse<sup>e</sup>, Zwiebeln & Salat",
      price: "7,50",
    },
  ]
);
</script>

<style>
.openingHours a {
  color: var(--text-prim);
}
.i_sm {
  font-size: .8em;
}
</style>
