<template>
    <header class="d-flex flex-column justify-content-end align-items-center">
        <!-- WRAPPER FOR THE PALMS AND THE SVG HEADLINE -->
        <div class="palmsHeadlineWrapper d-flex flex-column jsutify-content-start align-items-center">
            <!-- WRAPPER FOR THE PALMS -->
            <div class="adressLink bg-tert py-3 px-2  rounded-pill d-flex justify-content-center align-items-center">
                <a class="text-prim fw-bold d-flex justify-content-between align-items-center" href="https://www.google.de/maps/dir//Zur+Loge+1,+26188+Edewecht/@53.1356337,7.9037449,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b6e264ecd66189:0xd658cc4beb54f44f!2m2!1d7.986145!2d53.1356621?entry=ttu" target="_blank">
                    <fa-icon icon="fa-solid fa-location-dot" class="me-3"></fa-icon>
                    Zur Loge 1 | 26188 Edewecht
                </a>
            </div>

            <!-- WRAPPER FOR THE SVG HEADLINE INCLUDING TOP AND BOTTOM BORDER -->
            <div class="headlineWrapper position-relative overflow-hidden d-flex flex-column justify-content-start align-items-center">
                <dividing-bar class="redLine m-0 position-relative upperLine d-none d-xl-block"></dividing-bar>
                <div class="redLine m-0 position-relative upperLine"></div>
                <h1 class="m-0 text-prim">La Palma</h1>
                <div class="redLine m-0 d-xl-none"></div>
                <img src="@/assets/img/pizza/pizza.png" alt="pizza_picture" class="position-absolute" ref="pizza">
            </div>
            <dividing-bar></dividing-bar>
            <dividing-bar></dividing-bar>
            <div class="d-flex flex-column justify-content-center align-items-center py-2 px-3">
                <h5 class="m-0 text-red text-center">LIEFERSERVICE</h5>
                <h6 class="m-0 text-red text-center">ohne Aufpreis, Mindestbestellwert 20€</h6>
            </div>
            <div class="telWrapper bg-tert d-flex justify-content-center align.items-center py-2 px-2">
                <a class="text-prim" href="tel:04405489094">04405 - 48 90 94</a>
            </div>
            <dividing-bar></dividing-bar>
            <dividing-bar></dividing-bar>
            <div class="d-flex flex-column justify-content-center align-items-center py-2 px-3">
                <h5 class="m-0 text-red text-center">LIEFERZEITEN</h5>
                <h6 class="m-0 text-red text-center">18:00 - 22:00 Uhr</h6>
            </div>
        </div>
    </header>
</template>

<script setup>
import { onMounted, ref } from "vue";

const pizza = ref();
onMounted(() => {
    setTimeout(() => {
        pizza.value.classList.add("outside");
    }, 500);
})
</script>

<style scoped>
.upperLine {
    z-index: 10;
}
.adressLink {
    width: 90%;
    margin-bottom: 30%;
}
.headlineWrapper h1 {
    font-size: 80px;
    font-family: "Caveat HL";
}
.telWrapper a {
    text-decoration: none;
    font-size: 28px;
}
.telWrapper {
    width: 100%;
}
.headlineWrapper img.outside {
    opacity: 1;
    transform: rotate(0deg);
    bottom: -80vw;
}
.headlineWrapper img {
    opacity: 0;
    width: 120%;
    left: -10%;
    bottom: -150%;
    transform: rotate(45deg);
    transition: all .8s ease-out;
}
.redLine {
    width:100%;
    height: 2px;
    background-color: var(--sec);
}
.headlineWrapper{
    width: 100%;
    padding-bottom: 30vh;
}
.palmsHeadlineWrapper {
    width: 100%;
}
header {
    height: calc(100vh - 50px);
    padding-top: 20vh;
}
@media screen and (min-width: 576px) {
    
    .headlineWrapper img.outside {
        opacity: 1;
        transform: rotate(0deg);
        bottom: -90vw;
    }
    .headlineWrapper img {
        bottom: -200%;
    }
    .adressLink {
        width: 90%;
        margin-bottom: 20%;
    }
}
@media screen and (min-width: 768px) {
    
    .headlineWrapper img.outside {
        opacity: 1;
        transform: rotate(0deg);
        bottom: -100vw;
    }
    .headlineWrapper img {
        bottom: -300%;
    }
    .adressLink {
        width: 90%;
        margin-bottom: 15%;
    }
}
@media screen and (min-width: 992px) {
    
    .headlineWrapper img.outside {
        opacity: 1;
        transform: rotate(0deg);
        bottom: -107vw;
    }
    .headlineWrapper img {
        bottom: -400%;
    }
    .adressLink {
        width: 90%;
        margin-bottom: 15%;
    }
}
@media screen and (min-width: 1200px) {
    .headlineWrapper h1 {
        font-size: 120px;
        transform: translate(-300px, 0);
    }
    
    .headlineWrapper img.outside {
        opacity: 1;
        transform: rotate(0deg);
        left: 70%;
        bottom: -20%;
    }
    .headlineWrapper{
        padding-bottom: 20vh;
    }
    .headlineWrapper img {
        bottom: -400%;
        width: 600px;
        left: 90%;
        bottom: -20%;
    }
    .adressLink {
        width: 300px;
        margin-bottom: 7.5%;
    }
    header {
        height: calc(100vh - 100px);
    }
}
@media screen and (min-width: 1400px) {
    
    .headlineWrapper img.outside {
        opacity: 1;
        transform: rotate(0deg);
        left: 80%;
        bottom: -20%;
    }
    .headlineWrapper img {
        bottom: -400%;
        width: 600px;
        left: 110%;
        bottom: -20%;
    }
    .adressLink {
        margin-bottom: 3%;
    }
}
</style>