<template>
  <cardboard-section
    :heading="'ORDER LUNCH'"
    :subheading="'We deliver standard set lunches.'"
    :button="'LET S CONNECT'"
    @getLink="$router.push('/lets-connect')"
    :img="'src/assets/img/bg-img/order-lunch.png'"
    :media="'src/assets/img/bg-heading/order-lunch.png'"
  />
  <!-- scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/order-lunch.jpg'" />
</template>
   
   <script setup>
import { defineOptions } from "vue";
import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "OrderLunch",
});
</script>
   