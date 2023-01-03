<script setup lang="ts">
import ButtonView from '@/components/ButtonView.vue';
</script>

<template>
  <div class="container">
    <h1>Kontakt</h1>
    <p class="breadcrumb">
      <a href="/">Startseite</a> / <a class="refresh" href="#">Kontakt</a>
    </p>
    <form class="form">
      <div class="line">
        <input name="first_name" type="text" placeholder="Vorname" />
        <input name="last_name" type="text" placeholder="Nachname" />
      </div>
      <input id="email" name="email" type="email" placeholder="E-Mail-Adresse" />
      <input name="subject" type="text" placeholder="Betreff" />
      <textarea name="message" placeholder="Hier deine Nachricht ..." />
      <div class="line">
        <ButtonView label="Senden" href="/send" />
      </div>
    </form>
  </div>
</template>


<style lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .line {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
}

@media (max-width: 400px) {
  .line {
    flex-direction: column;
  }
}


input[type="text"],
input[type="email"],
textarea {
  border: 1px solid black;
  padding: 10px 14px;
  font-size: 13px;
  flex: 1;
  border-radius: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  &:active,
  &:focus {
    outline: none;
    background: rgb(250, 250, 250);
    border: 1px solid rgb(0, 129, 189);
  }
}

textarea {
  min-height: 100px;
}
</style>
