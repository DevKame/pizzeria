<template>
    <header class="d-flex flex-column justify-content-end align-items-center border border-success">
        <!-- WRAPPER FOR THE PALMS AND THE SVG HEADLINE -->
        <div class="palmsHeadlineWrapper d-flex flex-column jsutify-content-start align-items-center">
            <!-- WRAPPER FOR THE PALMS -->
            <div class="adressLink bg-tert py-3 px-2 rounded-pill d-flex justify-content-center align-items-center">
                <a class="text-prim fw-bold d-flex justify-content-between align-items-center" href="https://www.google.de/maps/dir//Zur+Loge+1,+26188+Edewecht/@53.1356337,7.9037449,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47b6e264ecd66189:0xd658cc4beb54f44f!2m2!1d7.986145!2d53.1356621?entry=ttu" target="_blank">
                    <fa-icon icon="fa-solid fa-location-dot" class="me-3"></fa-icon>
                    Zur Loge 1 | 26188 Edewecht
                </a>
            </div>

            <!-- WRAPPER FOR THE SVG HEADLINE INCLUDING TOP AND BOTTOM BORDER -->
            <div class="headlineWrapper position-relative overflow-hidden d-flex flex-column justify-content-start align-items-center">
                <div class="redLine m-0"></div>
                <h1 class="m-0 text-prim">La Palma</h1>
                <div class="redLine m-0"></div>
                <transition appear name="pizza">
                    <img src="@/assets/img/pizza/pizza.png" alt="pizza_picture" class="position-absolute">
                </transition>
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


<style scoped>
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
.headlineWrapper img {
    width: 120%;
    left: -10%;
    bottom: -100%;
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

.pizza-enter-from {
    opacity: 0;
    bottom: -200%;
}
.pizza-enter-active {
    transition: all 1s ease;
}
.pizza-enter-to {
    opacity: 1;
    bottom: -100%;
}
</style>