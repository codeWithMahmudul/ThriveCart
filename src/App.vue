<!-- <template>
    <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router';

</script>

<style></style> -->

<template>
    <div class="main-wrapper main-wrapper-2">
        <Header />
        <RouterView />
        <Footer />
    </div>
</template>
<script setup>
import Header from "./components/layouts/Header.vue"
import Footer from "./components/layouts/Footer.vue"
import { RouterView } from 'vue-router';

</script>

<style></style>
