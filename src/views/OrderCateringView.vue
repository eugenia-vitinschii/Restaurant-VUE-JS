<template>
  <!-- order catering options -->
  <cardboard-section
    :heading="'Order Catering menu'"
    :subheading="'We also organize turnkey wedding banquets and provide on-site organization services.'"
    :button="'LET S CONNECT'"
    :img="'src/assets/img/bg-img/order-lunch.png'"
    :media="'src/assets/img/bg-heading/order-lunch.png'"
  />
  <!-- order catering  scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
  <!-- order catering  section form-->
  <div class="order">
    <div class="container">
      <div class="order__wrapper">
        <menu-heading
          :heading="'Company data'"
          :img="'src/assets/img/bg-heading/order-lunch.png'"
        />
      </div>
      <div class="order__form">
        <br />
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    </div>
  </div>
</template>
   
<script setup>

import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import MenuHeading from "@/components/ui/MenuHeading.vue";

defineOptions({
  name: "OrderCateringPage",
});

</script>
   