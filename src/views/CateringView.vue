<template>
  <!-- catering menu options -->
  <cardboard-section
    :heading="'Catering menu'"
    :subheading="'The luxurious renovated hall Seasons, decorated with living greenery and radiating a summer mood'"
    :button="'order catering'"
    @getLink="$router.push('/order-catering')"
    :img="'src/assets/img/bg-img/catering-img.png'"
    :media="'src/assets/img/bg-heading/catering-img.png'"
  />
  <!-- catering menu section buffet-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Buffet menu'"
          :img="'src/assets/img/white-heading/catering-header-1.png'"
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
          <img src="@/assets/img/white-img/catering-img-1.png" alt="bg" />
        </div>
      </div>
    </div>
  </div>
  <!-- catering menu scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/catering-bg-1.png'" />
  <!-- catering menu sideDishes-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Hot appetizers'"
          :img="'src/assets/img/white-heading/catering-header-2.png'"
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
          <img src="@/assets/img/white-img/catering-img-2.png" alt="bg" />
        </div>
      </div>
    </div>
  </div>
  <!-- catering menu scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/catering-bg-2.png'" />
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
    price: "per person 12.99",
  },
  {
    id: "2r23frwfw",
    title: "Profiterole with light-grade salmon and cream cheese",
    description: "price per 1 pc., 25 g.",
    price: "per person 11.99",
  },
  {
    id: "26543fw",
    title: "Shot Shrimp with lychee",
    description: "Shot with fried shrimp with sweet chili sauce and lychee,",
    price: "per person 12.99",
  },
  {
    id: "2rw643fw",
    title: "Canape with boiled beetroot and goat cheese",
    description: "price per 1 pc., 25 g.",
    price: "per person 14.99",
  },
  {
    id: "2rjfw643fw",
    title: "Canapes with Brie cheese and strawberries",
    description: "20 g.",
    price: "per person 14.99",
  },
  {
    id: "2r32k43fw",
    title: "Wasabi shrimp on a buffet spoon",
    description:
      "Tiger shrimp in batter with Wasabi sauce with flying fish roe, price per 1 piece, 35 g.",
      price: "per person 12.99",
  },
  {
    id: "2rgjw6j43fw",
    title: "Bruschetta with light-semi-salmon and guacamole",
    description: "80 g.",
    price: "per person 10.00",
  },
];

const appetizers = [
  {
    id: "2rgjw6j43fw",
    title: "Spring roll with shrimp, mango, avocado and sweet chili sauce",
    description: "2 pcs (100 g) / 30 g",
    price: "per person 14.99",
  },
  {
    id: "33fsdsdf",
    title: "Spring roll with chicken, vegetables and sweet chili sauce",
    description: "2 pcs (120 g) / 30 g.",
    price: "per person 13.00",
  },
  {
    id: "3etewf",
    title: "Spring roll with perch fillet, avocado and cheese",
    description: "Served with sweet chili sauce, 2 pcs (100 g) / 30 g.",
    price: "per person 15.00",
  },
  {
    id: "3fg",
    title: "Tiger shrimp in batter and Tom Yam sauce",
    description: "1 pc. — 30 g.",
    price: "per person 10.50",
  },
  {
    id: "3sae3fw",
    title: "Kiwi mussels baked with cheese",
    description: "4 pcs. — 200 g.",
    price: "per person 10.99",
  },
  {
    id: "343433fw",
    title: "Chicken julienne with champignons",
    description: "90 g.",
    price: "per person 14.00",
  },
  {
    id: "3fderj43fw",
    title: "Pancake bag with porcini mushroom julienne",
    description: "80 g.",
    price: "per person 13.00",
  },

];
</script>