<template>
  <!-- catering menu options -->
  <cardboard-section
    :heading="'Catering menu'"
    :subheading="'The luxurious renovated hall Seasons, decorated with living greenery and radiating a summer mood'"
    :button="'LET S CONNECT'"
    :img="'src/assets/img/bg-img/order-lunch.png'"
    :media="'src/assets/img/bg-heading/order-lunch.png'"
  />
  <!-- catering menu section buffet-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Buffet menu'"
          :img="'src/assets/img/bg-heading/order-lunch.png'"
        />
        <div class="menu__table">
          <table>
            <the-table
              v-for="menu in buffet"
              :key="menu.id"
              :title="menu.title"
              :description="menu.description"
              :price="menu.price"
            />
          </table>
        </div>
        <div class="menu__img">
          <img src="@/assets/img/bg-heading/order-lunch.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- catering menu scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
  <!-- catering menu sideDishes-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Hot appetizers'"
          :img="'src/assets/img/bg-heading/order-lunch.png'"
        />
        <div class="menu__table">
          <table>
            <the-table
              v-for="menu in appetizers"
              :key="menu.id"
              :title="menu.title"
              :description="menu.description"
              :price="menu.price"
            />
          </table>
        </div>
        <div class="menu__img">
          <img src="@/assets/img/bg-heading/order-lunch.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- catering menu scrolling section -->
  <photo-section :preview="'src/assets/img/bg-heading/order-lunch.png'" />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import MenuHeading from "@/components/ui/MenuHeading.vue";
import TheTable from "@/components/ui/TheTable.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "CateringPage",
});

const buffet = [
  {
    id: "2rwfw",
    title: "Vol-au-vent with red caviar",
    description: "price per 1 pc., 10 g.",
    price: "person 2",
  },
  {
    id: "2r23frwfw",
    title: "Profiterole with light-grade salmon and cream cheese",
    description: "price per 1 pc., 25 g.",
    price: "person 2",
  },
  {
    id: "26543fw",
    title: "Shot Shrimp with lychee",
    description: "Shot with fried shrimp with sweet chili sauce and lychee,",
    price: "person 2",
  },
  {
    id: "2rw643fw",
    title: "Canape with boiled beetroot and goat cheese",
    description: "price per 1 pc., 25 g.",
    price: "person 2",
  },
  {
    id: "2rjfw643fw",
    title: "Canapes with Brie cheese and strawberries",
    description: "20 g.",
    price: "person 2",
  },
  {
    id: "2r32k43fw",
    title: "Wasabi shrimp on a buffet spoon",
    description:
      "Tiger shrimp in batter with Wasabi sauce with flying fish roe, price per 1 piece, 35 g.",
    price: "person 2",
  },
  {
    id: "2rgjw6j43fw",
    title: "Bruschetta with light-semi-salmon and guacamole",
    description: "80 g.",
    price: "person 2",
  },
];

const appetizers = [
  {
    id: "2rgjw6j43fw",
    title: "Bruschetta with light-semi-salmon and guacamole",
    description: "80 g.",
    price: "person 2",
  },
];
</script>