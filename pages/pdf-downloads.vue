<template>
  <div id="top">
    <div id="page-top">
      <TheMenu :main="main" :isPage="isPage" :title="title" />
    </div>
    <main id="maincontent">
      <article class="downloads container">
        <div class="download">
          <img
            class="thumb"
            src="~/assets/img/annual.jpg"
            alt="Download Full Report"
            title="Thumbnail of 2021 Report"
          />
          <a href="annual.pdf" >Download Full Report</a>
        </div>
        <div class="download">
          <img
            class="thumb"
            src="~/assets/img/financials.jpg"
            alt="Download Financials"
            title="Thumbnail of Financials"
          />
          <a href="financials.pdf" >Download Financials</a>
        </div>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      main: false,
      isPage: true,
      title: "PDF Downloads",
    };
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        class: "page",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>