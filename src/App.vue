<script  setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="nav-icon" :class="{ 'active': isMenuOpen }" @click.prevent="toggle">
      <span class="material-symbols-outlined" v-if="isMenuOpen">
        close
      </span>
      <span class="material-symbols-outlined" v-else>
        menu
      </span>
    </div>
    <div class="nav-container" :class="{ active: isMenuOpen }">
      <ul>
        <li>
          <RouterLink @click="toggle" to="/">Hallo</RouterLink>
        </li>
        <li>
          <RouterLink @click="toggle" to="/projekte">Projekte</RouterLink>
        </li>
        <li>
          <RouterLink @click="toggle" to="/expertise">Expertise</RouterLink>
        </li>
        <li>
          <RouterLink @click="toggle" to="/erfahrung">Erfahrung</RouterLink>
        </li>
        <li>
          <RouterLink @click="toggle" to="/kontakt">Kontakt</RouterLink>
        </li>
        <li class="black">
          <img :src="getImageUrl('github-octo.svg')" />
          <a href="https://github.com/emilianscheel" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  </header>

  <RouterView />


  <footer>
    <RouterLink to="/impressum">Impressum</RouterLink>
    <RouterLink to="/datenschutz">Datenschutz</RouterLink>
  </footer>
</template>

<script lang="ts">
export default {
  data: () => ({
    isMenuOpen: false
  }),
  methods: {
    toggle() {
      this.isMenuOpen = !this.isMenuOpen
    },
    getImageUrl(image_src: String) {
      return new URL(`./assets/images/${image_src}`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .container {
    flex: 1;
  }
}

footer {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 30px;
}

.nav-icon {
  position: fixed;
  z-index: 100;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  right: 100px;
  top: 100px;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: url('/images/cursor-28.svg') 14 14, auto;
  transition: cursor 0.2s ease-in-out;
  border-radius: 28px;
  font-size: 40px;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  span {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  &:hover {
    background: var(--color-background-mute);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  }
}

@media (max-width: 600px) {
  .nav-icon {
    right: 30px;
    top: 30px;
  }
}

.nav-container {
  position: fixed;
  left: 0;
  transform: translateX(-100%);
  border-right: 1px solid rgb(216, 216, 216);
  height: 100%;
  width: 18%;
  min-width: 300px;
  top: 0;
  padding-right: 100px;
  padding-left: 60px;
  padding-top: 100px;
  transition: transform 0.2s ease;
  z-index: 99;
  background: rgb(249, 249, 249);

  ul {
    list-style-type: none;

    li {
      margin-bottom: 10px;
      font-size: 22px;
      flex-direction: row;
      align-items: center;
      display: flex;
      gap: 10px;

      img {
        width: 26px;
      }
    }
  }

  .black a {
    color: black;

    &:hover {
      background: rgb(228, 228, 228);
    }
  }

  &.active {
    transform: translateX(0%);
  }
}

@media (max-width: 600px) {
  .nav-container {
    min-width: 100%;
    padding-left: 30px;
  }
}
</style>
