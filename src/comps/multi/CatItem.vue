<template>
    <div :class="fontcolorClass" class="catItem my-1 d-flex justify-content-center align-items-start">
        <div class="numberWrapper ps-1 d-flex justify-content-start align-items-center">
            {{ props.item.number }}
        </div>

        <div class="descWrapper d-flex flex-wrap justify-content-start align-items-center">
            <div class="title w-100 d-flex justify-content-start align-items-center">
                <p v-html="props.item.title" class="m-0 fw-bold"></p>
                <p v-if="props.item.surprise" class="m-0 ms-1 text-brown fw-bold">*Überraschungsteller*</p>
                <p v-if="props.item.oven" class="m-0 ms-1 text-brown fst-italic">im Steinofen gebacken</p>
            </div>
            <p v-if="props.item.additional" v-html="props.item.additional" class="i_sm"></p>
        </div>

        <div class="priceWrapper ps-1 d-flex justify-content-start align-items-center">
            {{ props.item.price }}
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, computed } from "vue";
let props = defineProps([
    "item",
]);

onMounted(() => {
    console.warn("");
    console.table(props.item);
})

const fontcolorClass = computed(() => props.item.veggie ? "text-green" : "text-prim");
</script>

<style scoped>
.numberWrapper,
.priceWrapper {
    width: clamp(30px, 15%, 50px);
}
.descWrapper {
    flex: 1;
}
.catItem {
    width: 100%;
    font-size: 14px;
}
</style>