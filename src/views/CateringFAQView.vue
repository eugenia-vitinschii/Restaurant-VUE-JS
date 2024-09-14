<template>
  <!-- catering FAQ options -->
  <cardboard-section
    :heading="'Catering FAQ'"
    :subheading="'Every year more than 300 couples trust us to organize their celebration!'"
    :button="'catering'"
    @getLink="$router.push('/catering')"
    :img="'src/assets/img/bg-img/catering-faq-img-1.png'"
    :media="'src/assets/img/bg-heading/catering-faq-img-1.png'"
  />
  <!-- catering FAQ  scrolling section -->
  <photo-section
    :preview="'src/assets/img/photo-section/menu-sideDishes.jpg'"
  />
  <!-- Data section -->
  <the-data />
  <!-- Info section section -->
  <div class="info">
    <div class="container">
      <div class="info__wrapper">
        <p class="subheading-green">Catering FAQ's</p>
        <div class="info__wrapper--item">
          <p class="body-text-green">How can i place order?</p>
          <p class="small-text-gray">
            Send a request to host an event, and our managers will select the
            optimal conditions for you and help you create a menu taking into
            account all your wishes and the budget allocated for these purposes.
            Discounts apply to direct customers.
          </p>
        </div>
        <div class="info__wrapper--item">
          <p class="body-text-green">All halls</p>
          <ul>
            <li class="small-text-gray">Hall "Seasons"</li>
            <li class="small-text-gray">Fireplace room</li>
            <li class="small-text-gray">Small Hall</li>
            <li class="small-text-gray">Veranda</li>
            <li class="small-text-gray">Registration area</li>
          </ul>
          <p class="small-text--green">
            * Still wondering how to organize a wedding celebration? Renting a
            cafe for a wedding is a great solution! We will help organize a
            celebration for all times!
          </p>
        </div>
        <div class="info__wrapper--item">
          <p class="body-text-green">Holding banquets in our restaurant</p>
          <p class="small-text-gray">
            A large-scale celebration should be held in the ever-blooming
            “Seasons” hall with a capacity of up to 350 guests. Soft dim light
            or a brightly lit area with individual design, a contact bar, a
            stage and a dance floor will make your holiday unforgettable.
          </p>
          <p class="small-text-gray">
            We recommend holding a banquet for a wedding or anniversary for up
            to 120 guests in the Fireplace Hall. Live fire and unique design
            will give your event a special atmosphere.
          </p>
        </div>
        <div class="info__wrapper--item">
          <p class="body-text-green">Festive serving of dishes</p>
          <p class="small-text-gray">
            A colorful performance is offered as a gift when you order one of
            our formal banquet dishes. Among them: traditional dishes of Russian
            and European cuisine, which serve as an indispensable attribute of
            the festive table.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- catering FAQ  scrolling section -->
  <photo-section
    :preview="'src/assets/img/photo-section/catering-faq-bg-1.png'"
  />
</template>
   
<script setup>
import { defineOptions } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import TheData from "@/components/ui/TheData.vue";

defineOptions({
  name: "CateringFAQPage",
});
</script>
   