<template>
  <!-- order catering options -->
  <cardboard-section
    :heading="'Order Catering menu'"
    :subheading="'We also organize turnkey wedding banquets and provide on-site organization services.'"
    :button="'catering faq'"
    @getLink="$router.push('/catering-faq')"
    :img="'src/assets/img/bg-img/order-catering-img.png'"
    :media="'src/assets/img/bg-heading/order-catering-img.png'"
  />
  <!-- order catering  scrolling section -->
  <photo-section
    :preview="'src/assets/img/photo-section/order-catering-bg-1.png'"
  />
  <!-- order catering  section form-->
  <div class="form">
    <div class="container">
      <div class="form__wrapper">
        <form  class="form__form">
          <menu-heading
            :heading="'Company data'"
            :img="'src/assets/img/white-heading/catering-header-2.png'"
          />
          <div class="form__item">
            <label for="name">Company name</label>
            <input type="text" placeholder="Input name" class="input" />
          </div>
          <div class="form__item">
            <label for="name">Contact person placing order</label>
            <input type="text" placeholder="Name" class="input" />
            <input type="text" placeholder="E-mail" class="input" />
            <input type="text" placeholder="Phone" class="input" />
          </div>
          <div class="form__item">
            <label for="name"
              >Contact person on the day (if the diffrent)</label
            >
            <input type="text" placeholder="Name" class="input" />
            <input type="text" placeholder="E-mail" class="input" />
            <input type="text" placeholder="Phone" class="input" />
          </div>
          <div class="form__item">
            <label for="name">Adress</label>
            <input type="textarea" class="input" />
          </div>
          <menu-heading
            :heading="'Event Details'"
            :img="'src/assets/img/white-heading/catering-header-2.png'"
          />
        </form>
      </div>
    </div>
  </div>
  <!-- order catering  scrolling section -->
  <photo-section
    :preview="'src/assets/img/photo-section/order-catering-bg-2.png'"
  />
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
   