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
        <form class="form__form">
          <menu-heading
            :heading="'Company data'"
            :img="'src/assets/img/white-heading/catering-header-2.png'"
          />
          <div class="form__items">
            <div class="form__item">
              <label for="company" class="small-text-gray">Company name {{ formData.company }}</label>
              <input type="text" class="input" id="company" v-model="formData.company" />
            </div>
          </div>
          <div class="form__items">
            <div class="form__item">
              <label for="contact-name">Contact Person placing Order {{ formData.name }} {{ formData.email }} {{ formData.phone }}</label>
              <input type="text" placeholder="Contact name" class="input" id="contact-name" v-model="formData.name"/>
            </div>
            <div class="form__item">
              <label for="contact-email" class="hidden">label</label>
              <input type="text" placeholder="E-mail" class="input" id="contact-email" v-model.trim="formData.email"/>
            </div>
            <div class="form__item">
              <label for="contact-phone" class="hidden">label</label>
              <input type="tel" placeholder="Phone number" class="input" id="contact-phone" v-model.number="formData.phone"/>
            </div>
          </div>
          <div class="form__items">
            <div class="form__item">
              <label for="name">Contact Person on the day (If different) {{ formData.contactName }} {{ formData.contactEmail }} {{ formData.contactPhone }}</label>
              <input type="text" placeholder="Contact name" class="input"  id="name" v-model="formData.contactName"/>
            </div>
            <div class="form__item">
              <label for="e-mail" class="hidden">label</label>
              <input type="text" placeholder="E-mail" class="input" id="e-mail" v-model.trim="formData.contactEmail"/>
            </div>
            <div class="form__item">
              <label for="phone" class="hidden">Label</label>
              <input type="tel" placeholder="Phone number" class="input" id="phone" v-model.number="formData.contactPhone" />
            </div>
          </div>
          <div class="form__items">
            <div class="form__item">
              <label for="invoicing">Invoicing Adress {{ formData.invoicing }}</label>
              <textarea name="shipping" id="invoicing" cols="20" rows="10" v-model="formData.invoicing"></textarea>
            </div>
            <div class="form__item">
              <label for="shipping">Shipping Adress {{ formData.shipping }}</label>
              <textarea name="shipping" id="shipping" cols="20" rows="10"  v-model="formData.shipping"></textarea>
            </div>

          </div>
          <div class="form__items">
            <div class="form__item">
        <label for="reference">Reference {{ formData.reference }}</label>
              <input type="text" class="input" id="reference" v-model="formData.reference"/>
            </div>
          </div>
          <menu-heading
            :heading="'Event Details'"
            :img="'src/assets/img/white-heading/catering-header-2.png'"
          />
          <div class="form__items">
            <div class="form__item">
              <label for="number" class="small-text-gray">Number of guests {{ formData.number }}</label>
              <input type="text" class="input" id="number" v-model.number="formData.number"/>
            </div>
            <div class="form__item">
              <label for="date">Event date {{ formData.eventDate }}</label>
              <input type="date" id="date" name="tdate" value="2024-09-22" min="2024-01-01" max="2025-12-31" v-model="formData.eventDate"/>
            </div>
          </div>
          <div class="form__items">
            <div class="form__item">
              <label for="dishes">Compostable dishes and serving utensils required</label>
              <select name="dishes" id="dishes" v-model="formData.dishes">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div class="form__item">
              <label for="delivery">Delivery time {{formData.delivery  }}</label>
              <input type="time" id="delivery" name="delivery" min="09:00" max="18:00" v-model="formData.delivery" required />
            </div>
            <div class="form__item">
              <label for="pickUp">Pick Up time (If Applicable) {{formData.pickUp  }}</label>
              <input type="time" id="pickUp" name="pickUp" min="09:00" max="18:00" v-model="formData.pickUp"  required />
            </div>
          </div>
          <div class="form__items">
            <div class="form__item">
              <label for="allergies">Allergies / food restrictions {{  formData.allergies }}</label>
              <textarea name="shipping" id="allergies" cols="20" rows="10" v-model="formData.allergies" ></textarea>
            </div>
            <div class="form__item">
              <label for="comments">Comments {{ formData.comments }}</label>
              <textarea name="shipping" id="comments" cols="20" rows="10" v-model="formData.comments" ></textarea>
            </div>
          </div>
          <input type="submit" class="button-green" value="Send Information "> 
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
import { defineOptions, ref } from "vue";

import CardboardSection from "@/components/sections/CardboardSection.vue";
import PhotoSection from "@/components/sections/PhotoSection.vue";
import MenuHeading from "@/components/ui/MenuHeading.vue";

defineOptions({
  name: "OrderCateringPage",
});

 

const formData = ref({
  company: '',
  name: '',
  email: '',
  phone: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  invoicing: '',
  shipping: '',
  reference: '',
  number: '',
  eventDate: '',
  dishes: '',
  delivery: '',
  pickUp: '',
  allergies: '',
  comments: '',

})

</script>
   