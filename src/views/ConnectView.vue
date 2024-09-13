<template>
  <!-- let's connect options -->
  <cardboard-section
    :heading="'Connect'"
    :subheading="'We will make sure that your celebration will be remembered for a long time!'"
    :button="'see menu'"
    @getLink="$router.push('/menu')"
    :img="'src/assets/img/bg-img/menu-img.png'"
    :media="'src/assets/img/bg-heading/home-img-3.png'"
  />
  <!-- let's connect  scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/food-bg.png'" />
  <div class="connect">
    <div class="container">
      <div class="connect__wrapper">
        <div class="connect__media">
            <img src="@/assets/img/white-img/catering-img-2.png" alt="">
          </div>
        <div class="connect__items">
          <p class="heading-green connect__item--title">Locations</p>
          <connect-data 
            v-for="item in data"
            :key="item.id"
            :adress="item.adress"
            :workDays="item.workDays"
            :closedDays="item.closedDays"
            :street="item.street"
            :phone="item.phone"
          />
        </div>
      </div>
    </div>
  </div>
  <!--  let's connect scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-banquet.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import ConnectData from "@/components/ui/ConnectData.vue";

defineOptions({
  name: "ConnectPage",
});

const data = [
  {
    id: "2353we",
    adress: "Gorky Central Park",
    workDays: "Monday - friday 11AM -2PM",
    closedDays: "Sat, sun: closed",
    street: "Krymsky Val, house 9, building 20",
    phone: "(613) 323 - 4648",
  },
  {
    id: "4323we",
    adress: "Gorky Central Park",
    workDays: "Monday - friday 10AM -8PM",
    closedDays: "Sat, sun: closed",
    street: "Krymsky Val, house 9, building 20",
    phone: "(613) 323 - 4864",
  },
  {
    id: "2rer3we",
    adress: "Gorky Central Park",
    workDays: "Monday - friday 8AM -8PM",
    closedDays: "Sat, sun: closed",
    street: "Krymsky Val, house 9, building 20",
    phone: "(613) 323 - 4884",
  },
];
</script>
   