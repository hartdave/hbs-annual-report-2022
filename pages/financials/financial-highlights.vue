<template>
  <div id="top">
    <div id="page-top">
      <TheMenu :main="main" :isPage="isPage" :title="title" />
    </div>
    <main id="maincontent">
      <article class="sidebar container">
        <aside>
          <financials-menu />
        </aside>
        <div class="content">
          <h1>{{ this.subTitle }}</h1>
          <ul class="list">
            <li>
              Operating revenues decreased 7 percent to $805 million, while
              operating expenses declined 6 percent to $779 million.
            </li>
            <li>
              Harvard Business School Online and Harvard Business Publishing
              (HBP) generated record revenues, while MBA and Executive Education
              tuition revenue declined.
            </li>
            <li>
              Salaries and benefits grew 3 percent for the year, driven by an
              increase in the number of faculty.
            </li>
            <li>
              New gifts and pledges totaled $162 million, compared with $76
              million in fiscal 2020.
            </li>
            <li>
              The return on the University's endowment was 33.6 percent,
              compared with 7.3 percent in fiscal 2020.
            </li>
            <li>
              The value of the School's endowment (after the net impact of
              distributions from the endowment and the addition of new gifts)
              increased to $5.3 billion, from $4.1 billion a year earlier.
            </li>
            <li>
              Capital investments in campus facilities and new construction
              decreased to $22 million from $43 million in fiscal 2020.
            </li>
            <li>
              The School generated an operating surplus of $26 million, compared
              with $30 million for the prior year.
            </li>
            <li>
              HBS ended fiscal 2021 with an unrestricted reserves balance of
              $211 million, compared with $174 million a year earlier.
            </li>
            <li>
              The School's total net assets increased to $6.4 billion, from $5.2
              billion at the end of fiscal 2020, primarily reflecting the impact
              of growth in the market value of the endowment.
            </li>
          </ul>
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
      title: "Financials",
      subTitle: "Financial Highlights",
    };
  },
  head() {
    return {
      title: `${this.title + " | " + this.subTitle}`,
      bodyAttrs: {
        class: "page financials",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>