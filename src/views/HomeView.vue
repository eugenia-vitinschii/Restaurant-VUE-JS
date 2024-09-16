<template>
  <!--section-->
  <cardboard-section
    :heading="'Only Organic'"
    :subheading="'Order fresh products with delivery'"
    :button="'view menu'"
    @getLink="$router.push('/menu')"
    :img="'src/assets/img/bg-img/home-img-1.png'"
    :media="'src/assets/img/bg-heading/home-img-1.png'"
  />
  <!--section menu-->
  <transparent-section
    :class="'photo'"
    :heading="'Tasty menu'"
    :subheading="'Fresh salads, soups and side dishes'"
    :button="'view menu'"
    @getLink="$router.push('/menu')"
  />
  <!--section menu-->
  <cardboard-section

    :heading="'Sliced ​​vitamins'"
    :subheading="'sliced ​​vegetables and fruits for your holidays from the most delicious vegetables'"
    :button="'view catering'"
    @getLink="$router.push('/catering')"
    :img="'src/assets/img/bg-img/home-img-2.png'"
    :media="'src/assets/img/bg-heading/home-img-2.png'"
  />
  <!--section-->
  <transparent-section
    :heading="'can i order ...?'"
    :subheading="'How to order delivery for a specific day or change the menu'"
    :button="'view answers'"
    @getLink="$router.push('/catering-faq')"
  />
  <!-- Data section -->
  <the-data/>
  <!--section-->
  <cardboard-section
    :heading="'need lunch?'"
    :subheading="'Are you hungry? Order lunches for your team'"
    :button="'see all'"
    @getLink="$router.push('/order-lunch')"
    :img="'src/assets/img/bg-img/home-img-3.png'"
    :media="'src/assets/img/bg-heading/home-img-3.png'"
  />
  <!--section-->
  <transparent-section
    :class="'photo--2'"
    :heading="'be healthy '"
    :subheading="'we make all for you '"
    :button="'get in touch!'"
    @getLink="$router.push('/lets-connect')"
  />
</template>

<script setup>
import { defineOptions } from "vue";

import TransparentSection from "@/components/sections/TransparentSection.vue";
import CardboardSection from "@/components/sections/CardboardSection.vue";
import TheData from "@/components/ui/TheData.vue";

defineOptions({
  name: "HomePage",
});

</script>