<template>
    <section class="d-flex flex-column justify-content-start align-items-center">
        <dividing-bar></dividing-bar>
        <div class="foodContent px-1 mt-2 d-flex flex-column justify-content-start align-items-start">
            <h2 class="headline text-red">{{ $props.headline }}</h2>
            <p v-if="subBrown" class="m-0 cat_subtext text-brown">{{ props.subBrown }}</p>
            <p v-if="subRed" class="cat_subtext text-red">{{ props.subRed }}</p>
            <cat-item v-for="item in props.items" :key="item.number" :item="item"></cat-item>
        </div>
        <dividing-bar></dividing-bar>
    </section>
</template>

<script setup>
import { defineProps } from "vue";
import CatItem from "./CatItem.vue";
let props = defineProps([
    "headline",
    "subBrown",
    "subRed",
    "items",
]);
</script>


<style scoped>
.cat_subtext {
    font-size: 15px;
}
.headline {
    text-decoration: underline;
    text-decoration-color: var(--tert);
    text-decoration-thickness: 4px;
}
.foodContent {
    width: 100%;
}
</style>