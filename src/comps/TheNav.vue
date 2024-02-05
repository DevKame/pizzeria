<template>
    <div class="navHolder position-sticky bg-tert d-flex justify-content-center align-items-denter">
        <div class="navArrows navLeft d-flex justify-content-center align-items-center">
            <div @click="swipeLeft" class="arrowHolder bg-red d-flex justify-content-center align-items-center border border-black rounded-circle">
                <fa-icon icon="fa-solid fa-backward" class="nav-icons"></fa-icon>
            </div>
        </div>

        <nav class="d-flex overflow-x-hidden position-relative justify-content-around align-items-center border border-danger">
            <div class="movingItemsHolder border border-success position-absolute d-flex justify-content-around align-items-center py-2 px-1" ref="movingNav">
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Öffnungszeiten</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Über uns</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Vorspeisen</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Salate</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Kebab / Gyros</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Baguettes</span>
            </div>
        </nav>

        <div @click="swipeRight" class="navArrows navRight d-flex justify-content-center align-items-center">
            <div class="arrowHolder bg-red d-flex justify-content-center align-items-center border border-black rounded-circle">
                <fa-icon icon="fa-solid fa-forward" class="nav-icons"></fa-icon>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const movingNav = ref();
function swipeRight() {
    let navleft = +((getComputedStyle(movingNav.value).left).replace("px", ""));
    let navright = +((getComputedStyle(movingNav.value).right).replace("px", ""));
    if(navright + 50 >= 0)
    {
        movingNav.value.style.left = (navleft - -(navright)).toString() + "px";
    } else {
        movingNav.value.style.left = (navleft - 50).toString() + "px";
    }
}
function swipeLeft() {
    let navleft = +((getComputedStyle(movingNav.value).left).replace("px", ""));
    if(navleft < 0)
    {
        if(navleft + 50 > 0)
        {
            movingNav.value.style.left = (navleft + -(navleft)).toString() + "px";
        } else {
            movingNav.value.style.left = (navleft + 50).toString() + "px";
        }
    }
}
</script>

<style scoped>
.movingItemsHolder {
    top: 0;
    left: 0;
    transition: left .1s ease-out;
}
nav span::selection {
    all: unset;
}
nav span {
    text-wrap: nowrap;
    font-size: 13px;
}
.arrowHolder {
    width: 30px;
    aspect-ratio: 1;
}
.nav-icons {
    color: var(--text-prim);
}
.navArrows {
    width: 10%;
    min-width: 35px;
}
nav {
    flex: 1;
}
.navHolder {
    top: 0;
    height: 50px;
    border: 3px solid var(--text-prim);
    box-shadow: 0 0 10px 5px black inset;
    z-index: 5;
}
</style>