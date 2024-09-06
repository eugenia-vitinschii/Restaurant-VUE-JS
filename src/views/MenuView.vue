<template>
  <cardboard-section
    :heading="'Only Organic'"
    :subheading="'Order fresh products with delivery'"
    :button="'view products'"
    :img="'src/assets/img/lime.png'"
    :media="'src/assets/img/color-veg-1.png'"
  />
  <!-- menu section -->
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <menu-heading
          :heading="'Bevarages'"
          :img="'src/assets/img/cabbage.png'"
        />
        <div class="menu__table">
          <table>
            <tr>
              <td>
              <the-table
                v-for="menu in menuItems"
                :key="menu.id"
                :title="menu.title"
                :description="menu.description"
                :price="menu.price"
              />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
  <!-- scrolling section -->
  <photo-section :preview="'src/assets/img/lime.png'"/>
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import MenuHeading from "@/components/ui/MenuHeading.vue";
import TheTable from "@/components/ui/TheTable.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";

defineOptions({
  name: "MenuPage",
});

const menuItems = [
  {
    id: "2",
    title: "Belgian Ice Cream",
    description: "Chocolate, Double Pineapple, Red and White Grapes",
    price: "person 2",
  },
  {
    id: "4",
    title: "Belgian Ice Cream",
    description: "Chocolate, Double Pineapple, Red and White Grapes",
    price: "person 2",
  },
  {
    id: "45r2",
    title: "Belgian Ice Cream",
    description: "Chocolate, Double Pineapple, Red and White Grapes",
    price: "person 2",
  },
];
</script>

