<template>
  <cardboard-section
    :heading="'Only Organic'"
    :subheading="'Order fresh products with delivery'"
    :button="'view products'"
    :img="'src/assets/img/lime.png'"
    :media="'src/assets/img/color-veg-1.png'"
  />
  <transparent-section
    :class="'photo'"
    :heading="'Tasty menu'"
    :subheading="'Fresh salads, soups and side dishes'"
    :button="'view menu'"
  />
  <cardboard-section
    :heading="'Sliced ​​vitamins'"
    :subheading="'sliced ​​vegetables and fruits for your holidays from the most delicious vegetables'"
    :button="'view menu'"
    :img="'src/assets/img/cabbage.png'"
    :media="'src/assets/img/color-veg-2.png'"
  />
  <transparent-section
    :heading="'can i order?'"
    :subheading="'How to order delivery for a specific day or change the menu'"
    :button="'view answers'"
  />
  <cardboard-section
    :heading="'need catering?'"
    :subheading="'if you have a little event we can to make catering menu'"
    :button="'see all'"
    :img="'src/assets/img/cabbage.png'"
    :media="'src/assets/img/color-veg-3.png'"
  />
  <transparent-section
    :class="'photo--2'"
    :heading="'be healthy '"
    :subheading="'we make all for you '"
    :button="'get in touch!'"
  />
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "HomePage",
});


import TransparentSection from "@/components/sections/TransparentSection.vue";
import CardboardSection from "@/components/sections/CardboardSection.vue";
</script>