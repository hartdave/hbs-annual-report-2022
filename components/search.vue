<template>
  <form
    v-on:submit.prevent="onSubmit"
    class="search"
    :class="classes"
  >
    <label for="search">Search</label>
    <input
      type="text"
      name="search"
      ref="search"
      placeholder="Search for..."
      v-model="searchText"
      tabindex="-1"
    />
    <button class="icon-search" aria-label="Search Icon">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        xml:space="preserve"
      >
        <path
          d="M15.5,14h-0.8l-0.3-0.3c1-1.1,1.6-2.6,1.6-4.2C16,5.9,13.1,3,9.5,3S3,5.9,3,9.5S5.9,16,9.5,16c1.6,0,3.1-0.6,4.2-1.6
	l0.3,0.3v0.8l5,5l1.5-1.5L15.5,14z M9.5,14C7,14,5,12,5,9.5S7,5,9.5,5S14,7,14,9.5S12,14,9.5,14z"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      searchText: "",
      classes: "",
    };
  },
  methods: {
    focusInput() {
      this.$refs.search.tabIndex = 0;
      this.$refs.search.focus();
    },
    closeInput(){
      this.$refs.search.tabIndex = -1;
    },
    onSubmit() {
      let text = this.searchText.trim();
      if (this.classes === "") return (this.classes = "active");
      if (this.classes === "active") {
        if (!text.length) return (this.classes = "");
        if (text.length)
          return (window.location.href = `https://www.hbs.edu/about/Pages/search.aspx?q=${text}`);
      }
    },
  },
  watch: {
    classes: function (newValue, oldValue) {
      console.log(newValue, oldValue);
      if (newValue === "active") {
        this.focusInput();
      } else {
        this.closeInput();
      }
    },
  },
};
</script>