<template>
  <div class="container menu">
    <div class="masthead">
      <nuxt-link to="/" class="title">
        <h2>2022 <span>Annual Report</span></h2>
      </nuxt-link>
      <ul class="subnav">
        <li><nuxt-link to="/from-the-dean">From The Dean</nuxt-link></li>
        <li><nuxt-link to="/key-metrics">Key Metrics</nuxt-link></li>
        <li>
          <button
            v-if="main"
            aria-label="Menu Toggle"
            @click="toggleSubmenu"
            :class="{
              active: isActive,
              'nuxt-link-exact-active':
                this.$route.path.split('/')[1] === 'financials',
            }"
          >
            Financials
          </button>
          <button
            v-else
            aria-label="Menu Toggle"
            @click="toggleSubmenu"
            :class="{
              active: isActive,
              'nuxt-link-exact-active':
                this.$route.path.split('/')[1] === 'financials',
            }"
          >
            Financials
          </button>
          <financials-menu
            v-if="main"
            @click="toggleSubmenu"
            :class="{ active: isActive }"
          />
        </li>
        <li><nuxt-link to="/pdf-downloads">PDF Downloads</nuxt-link></li>
        <li v-if="main">
          <a
            href="https://www.hbs.edu/about/annualreport/archive/Pages/default.aspx"
            >Archive</a
          >
        </li>
      </ul>
    </div>
    <div class="masthead" v-if="main">
      <a href="https://www.hbs.edu/" class="title">
        <h2>Harvard Business School</h2>
      </a>
      <ul class="subnav">
        <li>
          <a href="https://www.hbs.edu/about/Pages/default.aspx">About</a>
        </li>
        <li>
          <a
            href="https://www.hbs.edu/about/academic-programs/Pages/default.aspx"
            >Academic Programs</a
          >
        </li>
        <li>
          <a href="https://www.alumni.hbs.edu/Pages/default.aspx">Alumni</a>
        </li>
        <li>
          <a href="https://www.hbs.edu/faculty/Pages/default.aspx"
            >Faculty &amp; Research</a
          >
          <ul class="submenu">
            <li>
              <a href="https://www.library.hbs.edu/">Baker Library</a>
            </li>
            <li>
              <a href="https://www.alumni.hbs.edu/giving/Pages/default.aspx"
                >Giving</a
              >
            </li>
            <li>
              <a href="https://hbr.org/">Harvard Business Review</a>
            </li>
            <li>
              <a href="https://www.hbs.edu/about/initiatives/Pages/default.aspx"
                >Initiatives</a
              >
            </li>
            <li>
              <a href="https://www.hbs.edu/news/Pages/default.aspx">News</a>
            </li>
            <li>
              <a href="https://www.hbs.edu/recruiting/Pages/default.aspx"
                >Recruit</a
              >
            </li>
            <li>
              <a href="https://www.hbs.edu/maps/">Map / Directions</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="this.$route.path.split('/')[1] === 'financials'">
      <div class="mobile">
        <button
          aria-label="Financial Menu Toggle"
          class="financials"
          :class="{ active: close }"
          @click="toggleFinancials"
        >
          <span></span>
          {{ title }}
        </button>
        <financials-menu :class="{ active: close }"></financials-menu>
      </div>
      <div class="desktop title-wrap">
        <h1 class="title">
          {{ title }}
        </h1>
      </div>
    </div>
    <div v-else class="desktop title-wrap">
      <h1
        class="title"
        v-if="isPage || this.$route.path.split('/')[1] === 'financials'"
      >
        {{ title }}
      </h1>
    </div>
    <button
      class="hidden"
      v-if="main"
      @mouseover="toggleMain"
      @focus="toggleMain"
      tabindex="0"
      aria-hidden
    ></button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["main", "isPage", "title"],
  data() {
    return {
      close: false,
      aria: false,
      isActive: false,
    };
  },
  methods: {
    toggleSubmenu() {
      if (this.main) {
        this.isActive = !this.isActive;
      } else {
        this.$router.push("/financials/from-the-cfo");
      }
    },
    toggleMain() {
      this.$emit("toggleMain");
    },
    toggleFinancials() {
      this.close = !this.close;
    },
  },
};
</script>
