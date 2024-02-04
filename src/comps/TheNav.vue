<template>
    <div class="navHolder position-sticky bg-tert d-flex justify-content-center align-items-denter">
        <div class="navArrows navLeft d-flex justify-content-center align-items-center">
            <div class="arrowHolder bg-red d-flex justify-content-center align-items-center border border-black rounded-circle">
                <fa-icon icon="fa-solid fa-backward" class="nav-icons"></fa-icon>
            </div>
        </div>

        <nav class="d-flex overflow-x-hidden justify-content-around align-items-center border border-danger">
            <div class="movingItemsHolder d-flex justify-content-around align-items-center py-2 px-1">
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Öffnungszeiten</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Über uns</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Vorspeisen</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Salate</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Kebab / Gyros</span>
            <span class="mx-2 px-2 rounded-pill bg-grey text-prim border border-black border-2">Baguettes</span>
            </div>
        </nav>

        <div class="navArrows navRight d-flex justify-content-center align-items-center">
            <div class="arrowHolder bg-red d-flex justify-content-center align-items-center border border-black rounded-circle">
                <fa-icon icon="fa-solid fa-forward" class="nav-icons"></fa-icon>
            </div>
        </div>
    </div>
</template>

<style scoped>
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