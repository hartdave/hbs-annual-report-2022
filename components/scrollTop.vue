<template>
  <button class="scrollTop" ref="scrollTop" @click="goTop" aria-label="Scroll to Top">
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" y="0.75" width="45.5" height="45.5" fill="white" stroke="black" stroke-width="1.5"/>
<path d="M35 23L24 12L13 23" stroke="black" stroke-width="1.5"/>
<path d="M24 13V35" stroke="black" stroke-width="1.5"/>
</svg>
  </button>
</template>
<script>
export default {
  name: "ScrollTop",
  mounted() {
    window.addEventListener('scroll', this.checkScroll, false);
    document.addEventListener("touchmove", this.checkScroll, false);
  },
  methods: {
    checkScroll(){
      let windowY = window.scrollY;
      var header = document.querySelector('.header').offsetHeight
      if (windowY > header) {
        this.$refs.scrollTop.classList.add("showScroll");
      } else {
        this.$refs.scrollTop.classList.remove("showScroll");
      }
    },
    goTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>