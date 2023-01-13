<template>
  <ul class="submenu financials">
    <li>
      <nuxt-link to="/financials/from-the-cfo">From the CFO</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/financials/financial-highlights"
        >Financial Highlights</nuxt-link
      >
    </li>

    <li>
      <nuxt-link to="/financials/statement-of-activity"
        >Statement of Activity &amp; Cash Flows</nuxt-link
      >
    </li>
    <li>
      <nuxt-link to="/financials/consolidated-balance"
        >Consolidated Balance Sheet</nuxt-link
      >
    </li>
    <li>
      <nuxt-link to="/financials/supplemental"
        >Supplemental Financial Information</nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "FinancialSubmenu",
  methods: {
    test() {
      console.log("tested");
    },
    toggleFinancials(e) {
      this.$emit("toggleFinancials");
    },
  },
};
</script>

<style lang="scss" scoped></style>
