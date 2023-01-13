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
          <p class="note">
            (all in millions of dollars for the fiscal year ending June 30)
          </p>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Revenues</td>
                <td>2022</td>
                <td>2021</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>MBA Tuition &amp; Fees</td>
                <td>$137</td>
                <td>$113</td>
                <td>$136</td>
              </tr>
              <tr>
                <td>Executive Education Tuition</td>
                <td>174</td>
                <td>81</td>
                <td>146</td>
              </tr>
              <tr>
                <td>HBS Online</td>
                <td>74</td>
                <td>76</td>
                <td>58</td>
              </tr>
              <tr>
                <td>Publishing</td>
                <td>302</td>
                <td>274</td>
                <td>262</td>
              </tr>
              <tr>
                <td>Endowment Distribution</td>
                <td>191</td>
                <td>184</td>
                <td>173</td>
              </tr>
              <tr>
                <td>Unrestricted, Current Use Gifts</td>
                <td>45</td>
                <td>41</td>
                <td>37</td>
              </tr>
              <tr>
                <td>Restricted, Current Use Gifts</td>
                <td>24</td>
                <td>19</td>
                <td>23</td>
              </tr>
              <tr>
                <td>Housing, Rents, Interests Income &amp; Other</td>
                <td>19</td>
                <td>17</td>
                <td>26</td>
              </tr>
              <tr class="total">
                <td>Total Revenues</td>
                <td>$966</td>
                <td>$805</td>
                <td>$861</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr class="title">
                <td>Expenses</td>
                <td>2022</td>
                <td>2021</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Salaries &amp; Benefitis</td>
                <td>$428</td>
                <td>$386</td>
                <td>$375</td>
              </tr>
              <tr>
                <td>Publishing &amp; Printing</td>
                <td>89</td>
                <td>78</td>
                <td>81</td>
              </tr>
              <tr>
                <td>Space &amp; Occupancy</td>
                <td>73</td>
                <td>64</td>
                <td>71</td>
              </tr>
              <tr>
                <td>Supplies &amp; Equipment</td>
                <td>10</td>
                <td>10</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Professional Services</td>
                <td>53</td>
                <td>46</td>
                <td>59</td>
              </tr>
              <tr>
                <td>Fellowships</td>
                <td>57</td>
                <td>53</td>
                <td>57</td>
              </tr>
              <tr>
                <td>University Assessments</td>
                <td>27</td>
                <td>21</td>
                <td>26</td>
              </tr>
              <tr>
                <td>Debt Service</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Depreciation</td>
                <td>45</td>
                <td>46</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Other Expenses</td>
                <td>124</td>
                <td>73</td>
                <td>102</td>
              </tr>
              <tr class="total">
                <td>Total Expenses</td>
                <td>$908</td>
                <td>$779</td>
                <td>$831</td>
              </tr>
              <tr>
                <td>Net Operating Surplus</td>
                <td>$58</td>
                <td>$26</td>
                <td>$30</td>
              </tr>
              <tr>
                <td>Depreciation</td>
                <td>45</td>
                <td>46</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Non-Cash Items</td>
                <td>4</td>
                <td>-</td>
                <td>1</td>
              </tr>
              <tr class="total">
                <td>Cash Available from Capital Activities</td>
                <td>$107</td>
                <td>$72</td>
                <td>$76</td>
              </tr>
              <tr>
                <td>Capital Expenses</td>
                <td>$(43)</td>
                <td>$(22)</td>
                <td>$(43)</td>
              </tr>
              <tr>
                <td>Change in Capital Project-Prefunding</td>
                <td>10</td>
                <td>(14)</td>
                <td>8</td>
              </tr>
              <tr>
                <td>Use of Gifts for Capital Projects</td>
                <td>5</td>
                <td>6</td>
                <td>5</td>
              </tr>
              <tr class="total">
                <td>Net Capital Expenses</td>
                <td>$(28)</td>
                <td>$(30)</td>
                <td>$(30)</td>
              </tr>
              <tr>
                <td>New Borrowings</td>
                <td>$0</td>
                <td>$0</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Debt Principal Payment</td>
                <td>(6)</td>
                <td>(7)</td>
                <td>(7)</td>
              </tr>
              <tr>
                <td>Capitalization of Endowment Income</td>
                <td>(5)</td>
                <td>(6)</td>
                <td>(3)</td>
              </tr>
              <tr>
                <td>Decapitilization of Endowments</td>
                <td>4</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Other Non-Reserve Activity</td>
                <td>(57)</td>
                <td>7</td>
                <td>7</td>
              </tr>
              <tr class="total">
                <td>Changes in Debt &amp; Other</td>
                <td>$(64)</td>
                <td>$(5)</td>
                <td>$(1)</td>
              </tr>
              <tr class="white">
                <td>Increase (Decrease) in Reserves</td>
                <td>$15</td>
                <td>$37</td>
                <td>$45</td>
              </tr>
              <tr class="white">
                <td>Beginning Reserves Balance</td>
                <td>$211</td>
                <td>$174</td>
                <td>$129</td>
              </tr>
              <tr class="white">
                <td>Ending Reserves Balance</td>
                <td>$226</td>
                <td>$211</td>
                <td>$174</td>
              </tr>
            </tbody>
          </table>
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
      subTitle: "Statement of Activity & Cash Flows",
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
