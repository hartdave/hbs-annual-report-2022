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
              Operating revenues increased 20 percent to a record $966 million,
              while operating expenses increased 17 percent to $908 million.
            </li>
            <li>
              The largest revenue drivers were Executive Education, MBA tuition
              and fees, and Harvard Business Publishing.
            </li>
            <li>
              The major areas of expense growth were salaries and benefits,
              other expenses, printing and publishing, and professional
              services.
            </li>
            <li>
              New gifts and pledges totaled $172 million, compared with $162
              million in fiscal 2021.
            </li>
            <li>
              The return on the University’s endowment was -1.8 percent,
              compared with 33.6 percent in fiscal 2021.
            </li>
            <li>
              The value of the School’s endowment (after the net impact of
              distributions from the endowment and the addition of new gifts)
              decreased to $5.1 billion, from $5.3 billion a year earlier.
            </li>
            <li>
              Capital investments in campus facilities and new construction
              increased to $43 million from $22 million in fiscal 2021.
            </li>
            <li>
              The School generated an operating surplus of $58 million, compared
              with $26 million for the prior year.
            </li>
            <li>
              HBS ended fiscal 2022 with an unrestricted reserves balance of
              $227 million, compared with $211 million a year earlier.
            </li>
            <li>
              The School’s total net assets decreased to $6.2 billion as of June
              30, 2022, from $6.4 billion as of June 30, 2021, primarily
              reflecting a change in the total market value of the endowment.
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

<style lang="scss" scoped></style>
