<template>
  <div class="nav">
    <Search :class="{ active: isActive }" class="desktop" />
    <button class="navtoggle" :class="{ active: isActive }" @click="toggleMenu" aria-label="Navigation Toggle">
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["isActive"],
  methods: {
    toggleMenu(e) {
      this.$emit("toggleMenu");
    },
  },
};
</script>