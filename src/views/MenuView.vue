<template>
  <cardboard-section
    :heading="'Banquet menu'"
    :subheading="'The banquet menu of our restaurant has more than 1500 different items, providing a wide choice of dishes for your unforgettable celebration.'"
    :button="'LET\'\S CONNECT'"
    @getLink="$router.push('/lets-connect')"
    :img="'src/assets/img/bg-img/menu-img.png'"
    :media="'src/assets/img/bg-heading/menu-heading.png'"
  />
  <!-- scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-banquet.png'" />
  <!-- menu section banquet-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Ceremonial banquet dishes'"
          :img="'src/assets/img/white-heading/menu-header1.png'"
        />
        <div class="menu__table">
          <table>
            <the-table
              v-for="menu in banquet"
              :key="menu.id"
              :title="menu.title"
              :description="menu.description"
              :price="menu.price"
            />
          </table>
        </div>
        <div class="menu__img">
          <img src="@/assets/img/white-img/menu-img-1.png" alt="menu img" />
        </div>
      </div>
    </div>
  </div>
  <!-- scrolling section -->
  <photo-section
    :preview="'src/assets/img/photo-section/menu-sideDishes.jpg'"
  />
    <!-- Data section -->
    <the-data/>
  <!-- menu section sideDishes-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Side dishes'"
          :img="'src/assets/img/white-heading/menu-header2.png'"
        />
        <div class="menu__table">
          <table>
            <the-table
              v-for="menu in sideDishes"
              :key="menu.id"
              :title="menu.title"
              :description="menu.description"
              :price="menu.price"
            />
          </table>
        </div>
        <div class="menu__img">
          <img src="@/assets/img/white-img/menu-img-2.png" alt="menu img" />
        </div>
      </div>
    </div>
  </div>
  <!-- scrolling section -->
  <photo-section :preview="'src/assets/img/photo-section/menu-salads.png'" />
  <!-- menu section salads-->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Salads'"
          :img="'src/assets/img/white-heading/menu-header3.png'"
        />
        <div class="menu__table">
          <table>
            <the-table
              v-for="menu in salads"
              :key="menu.id"
              :title="menu.title"
              :description="menu.description"
              :price="menu.price"
            />
          </table>
        </div>
        <div class="menu__img">
          <img src="@/assets/img/white-img/menu-img-3.png" alt="menu img" />
        </div>
      </div>
    </div>
  </div>
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import MenuHeading from "@/components/ui/MenuHeading.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import TheTable from "@/components/ui/TheTable.vue";
import TheData from "@/components/ui/TheData.vue";
defineOptions({
  name: "MenuPage",
});

const banquet = [
  {
    id: "2",
    title: "Sterlet cooked in herbs",
    description: "Served with creamy caviar sauce (order from 2 kg), 1000 g.",
    price: "per person 9.99",
  },
  {
    id: "4",
    title:
      "Veal leg marinated in honey and horseradish, baked with mustard seeds",
    description:
      "Served with porcini mushroom sauce (order from 4 kg), 1000 g.",
      price: "per person 9.99",
  },
  {
    id: "45r2",
    title: "Baked pork ham",
    description: "Served with porcini mushroom sauce (order from 3 kg), 1000 g",
    price: "per person 8.99",
  },
  {
    id: "45dddr2",
    title: "Whole baked turkey",
    description: "Served with cranberry sauce, 1pc~3300 / 300 g.",
    price: "per person 7.99",
  },
  {
    id: "45rhh2",
    title: "Duck, aged in honey liqueur, stuffed with apples and cherries",
    description: "Served with Madeira sauce, 1pc~2000 g.",
    price: "per person 4.00",
  },
];

const sideDishes = [
  {
    id: "2rwfw",
    title: "Country-style fried potatoes",
    description: "150 g.",
    price: "per person 7.99",
  },
  {
    id: "2r23frwfw",
    title: "French fries",
    description: "150 g.",
    price: "per person 5.99",
  },
  {
    id: "2rweqw43fw",
    title: "Grilled vegetables",
    description: "Champignon, zucchini, eggplant, bell pepper, 150 g",
    price: "per person 7.99",
  },
  {
    id: "2rweqw43fw",
    title: "Steamed broccoli",
    description: "150 g",
    price: "per person 6.99",
  },
];
const salads = [
  {
    id: "2rwf8767w",
    title: "Caesar salad with chicken",
    description: "125/65 g.",
    price: "per person 10.99",
  },
  {
    id: "2wef",
    title: "Olivier salad with beef tongue",
    description: "dressed with Japanese mayonnaise, 200 g.",
    price: "per person 57.99",
  },
  {
    id: "2rhgfdsw",
    title: "Caesar salad with chicken",
    description: "125/65 g.",
    price: "per person 23.99",
  },
  {
    id: "2r45667w",
    title: "Salad Quail s Nest",
    description:
      "Veal tongue, ham, baked beef, quail eggs, cheese, fresh cucumber, 200 g.",
      price: "per person 7.99",
  },
  {
    id: "2rwffgdw",
    title: "Salad with fried salmon slices, crispy lettuce, tangerine slices",
    description: "with pine nuts and caviar dressing, 200 g.",
    price: "per person 12.99",
  },
  {
    id: "232367w",
    title: "Far Eastern Salad",
    description:
      "with squid, red caviar, avocado, fresh cucumber, egg and celery, dressed with Japanese mayonnaise, 200 g.",
      price: "per person 71.99",
  },
];
</script>

