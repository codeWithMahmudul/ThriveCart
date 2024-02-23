<template>
    <div class="main-wrapper main-wrapper-2">
        <!-- Header Is here  -->
        <Header />
        <!-- mini cart start -->
        <slot></slot>
        <!-- Footer Area is here -->
        <Footer />
    </div>
</template>
<script setup>
import Header from "./Header.vue"
import Footer from "./Footer.vue"

</script>

<style></style>
