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
            <img src="@/assets/img/white-img/catering-img-2.png" alt="media">
          </div>
        <div class="connect__items">
          <div class="connect__item">
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
          <div class="connect__item">
            <p class="heading-green connect__item--title">Catering</p>
            <ul>
              <li><a href="mailto:someone@example.com" class="body-text-green">Email Order to: <span class="green">order@restaurant.com</span></a></li>
              <li><a href="tel:+0000" class="body-text-green">Or give us a call at: <span class="green">(612)122-4234</span></a></li>
            </ul>
          </div>
          <div class="connect__item">
            <p class="heading-green connect__item--title">Feedback</p>
            <p class="body-text-green">Send us your comments here: 
              <a class="green" href="mailto:someone@example.com">order@restaurant.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Data section -->
  <the-data/>
  <!--  let's connect scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-banquet.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import ConnectData from "@/components/ui/ConnectData.vue";
import TheData from "@/components/ui/TheData.vue";

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
    phone: "(613)323-4648",
  },
  {
    id: "4323we",
    adress: "Gorky Central Park",
    workDays: "Monday - friday 10AM -8PM",
    closedDays: "Sat, sun: closed",
    street: "Krymsky Val, house 9, building 20",
    phone: "(613)323-4864",
  },
  {
    id: "2rer3we",
    adress: "Gorky Central Park",
    workDays: "Monday - friday 8AM -8PM",
    closedDays: "Sat, sun: closed",
    street: "Krymsky Val, house 9, building 20",
    phone: "(613)323- 884",
  },
];
</script>
   