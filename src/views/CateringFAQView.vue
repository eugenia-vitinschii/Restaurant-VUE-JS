<template>
  <!-- catering FAQ options -->
  <cardboard-section
    :heading="'Catering FAQ'"
    :subheading="'Every year more than 300 couples trust us to organize their celebration!'"
    :button="'LET S CONNECT'"
    :img="'src/assets/img/bg-img/order-lunch.png'"
    :media="'src/assets/img/bg-heading/order-lunch.png'"
  />
  <!-- catering FAQ  scrolling section -->
  <photo-section :preview="'src/assets/img/salads.png'" />
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <p class="heading-white">why?</p>
      </div>
    </div>
  </div>
  <!-- catering FAQ  scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "CateringFAQPage",
});

</script>
   