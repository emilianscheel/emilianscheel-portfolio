<script lang="ts">
export default {
  props: {
    href: { required: true, type: String },
    label: { required: true, type: String },
  },
  data() {
    return {
      isDone: this.done
    };
  }
};
</script>
<template>
  <a :href="href" class="button-a">
    <div class="button">{{ label }}</div>
  </a>
</template>

<style scoped lang="scss">
@-webkit-keyframes wiggle {
  0% {
    -webkit-transform: translate(2px, 0px);
  }

  20% {
    -webkit-transform: translate(-2px, 0px);
  }

  40% {
    -webkit-transform: translate(2px, 0px);
  }

  60% {
    -webkit-transform: translate(-2px, 0px);
  }

  80% {
    -webkit-transform: translate(2px, 0px);
  }

  100% {
    -webkit-transform: translate(0px, 0px);
  }
}

.button {
  padding: 10px 14px;
  background-color: rgb(0, 119, 224);
  border-radius: 12px;
  color: white;
  margin-top: 18px;
  width: max-content;

  &:hover {
    background: rgb(0, 107, 200);
    -webkit-animation-name: wiggle;
    -webkit-animation-duration: 500ms;
    -webkit-transform-origin: 50% 50%;
  }
}

.button-a {
  text-decoration: none;
  color: rgb(0, 129, 189);
  transition: 0.4s;

  &:hover {
    background: none;
  }
}
</style>