<template>
  <!-- footer -->
  <div class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <!-- footer logo home link -->
        <div class="footer__logo">
          <router-link to="/">
            <img src="@/assets/img/logo/footer-logo.png" alt="Logo footer">
          </router-link>
        </div>
        <!-- footer contacts -->
        <div class="footer__contacts">
          <!-- footer social media links -->
          <div class="footer__contacts--media">
            <a href="https://www.google.com" target="_blank">
              <img src="@/assets/img/logo/facebook.png" alt="facebook">
            </a>
            <a href="https://www.google.com" target="_blank">
              <img src="@/assets/img/logo/instagram.png" alt="instagram">
            </a>
            <a href="https://www.google.com" target="_blank">
              <img src="@/assets/img/logo/youtube.png" alt="instagram">
            </a>
            <!-- footer contacts information -->
          </div>
          <div class="footer__contacts--info">
            <a class="body-text-white" href="mailto:someone@example.com">Call us: 439-545-545</a>
            <a class="body-text-white" href="tel:+0000">contact@food.cd</a>
          </div>          
        </div>
        <!-- footer nav -->
        <div class="footer__nav">
          <div class="footer__nav-items">
            <ul>
            <li><router-link class="body-text-white footer__nav-item" to="/">Home</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/menu">Menu</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/order-lunch">Order lunch</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/catering">Catering</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/order-catering">Order catering</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/catering-faq">catering FAQ</router-link></li>
            <li><router-link class="body-text-white footer__nav-item" to="/lets-connect">Let's connect</router-link></li>
          </ul>
          </div>
        </div>
      </div>
      <!-- footer description -->
      <div class="footer__text">
        <p class="body-text-white">
          @All rights reserved 2016-2024
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "TheFooter",
});
</script>