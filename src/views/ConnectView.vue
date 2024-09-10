<template>
  <!-- let's connect options -->
  <cardboard-section
    :heading="'Connect'"
    :subheading="'We will make sure that your celebration will be remembered for a long time!'"
    :button="'LET S CONNECT'"
    :img="'src/assets/img/bg-img/order-lunch.png'"
    :media="'src/assets/img/bg-heading/order-lunch.png'"
  />
  <!-- let's connect  scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <p class="heading-white">connect</p>
      </div>
    </div>
  </div>
  <!--  let's connect scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "ConnectPage",
});
</script>
   