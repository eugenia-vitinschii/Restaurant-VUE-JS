<template>
  <cardboard-section
    :heading="'ORDER LUNCH'"
    :subheading="'We deliver standard set lunches.'"
    :button="'LET S CONNECT'"
    :img="'src/assets/img/lunch-media.png'"
    :media="'src/assets/img/lunch-img.png'"
  />
  <!-- scrolling section -->
  <photo-section :preview="'src/assets/img/lucnh-prhoto-section.png'" />
</template>
   
   <script setup>
import { defineOptions } from "vue";
import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "OrderLunch",
});
</script>
   