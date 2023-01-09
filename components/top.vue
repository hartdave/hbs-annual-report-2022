<template>
  <header class="header">
    <a class="skip-to-content-link" href="#maincontent"> Skip to content </a>
    <div class="container">
      <Logo />
      <Navbar :isActive="isActive" @toggleMenu="toggleMain" />
    </div>
    <nav id="main-menu" :class="{ active: isActive }" :aria-hidden="aria" :aria-expanded="aria">
      <Search />
      <TheMenu
        :main="main"
        :isPage="isPage"
        :title="title"
        @toggleMain="toggleMain"
      />
    </nav>
  </header>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      aria: "true",
      isActive: false,
      main: true,
      isPage: false,
      title: null,
    };
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
  methods: {
    toggleMain() {
      if (this.isActive === false) {
        this.isActive = true;
        this.aria = "false";
      } else {
        this.isActive = false;
        this.aria = "true";
        var home = document.querySelector("#page-top .masthead .title");
        var page = document.querySelector("#banner .masthead .title");
        if (home){
          home.focus();
        } else {
          page.focus();
        }
      }
    },
  },
};
</script>