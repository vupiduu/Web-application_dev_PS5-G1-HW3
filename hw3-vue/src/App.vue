<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <HeaderComponent />
  <router-view />
  <FooterComponent />
</template>

<style>
  body, #app {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>

