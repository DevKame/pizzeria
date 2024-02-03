<template>
    <div class="navHolder position-sticky bg-tert d-flex justify-content-center align-items-denter">
        <div class="navArrows navLeft d-flex justify-content-center align-items-center"></div>

        <nav class="d-flex justify-content-center align-items-center py-2 px-1 border border-danger">

        </nav>

        <div class="navArrows navRight d-flex justify-content-center align-items-center"></div>
    </div>
</template>

<style scoped>
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
}
</style>