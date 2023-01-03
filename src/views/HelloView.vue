<script setup lang="ts">
import ButtonView from '@/components/ButtonView.vue';
</script>

<template>
  <div class="container">
    <h1 style="font-weight: bold;">Hallo,</h1>
    <h3>ich bin Emilian Scheel.</h3>
    <ul>
      <li>aus Berlin</li>
      <li>ein Web-Entwickler</li>
      <li>Mathematik & Informatik interessiert</li>
    </ul>

    <ButtonView label="Projekte anzeigen" href="/projekte" />

    <p></p>
    Anfragen an <a href="mailto:info@dockyar.de">info@dockyar.de</a>


  </div>
</template>

<style scoped lang="scss">
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
</style>