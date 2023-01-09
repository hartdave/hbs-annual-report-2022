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
                <td>2021</td>
                <td>2020</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>MBA Tuition &amp; Fees</td>
                <td>$113</td>
                <td>$136</td>
                <td>$140</td>
              </tr>
              <tr>
                <td>Executive Education Tuition</td>
                <td>81</td>
                <td>146</td>
                <td>222</td>
              </tr>
              <tr>
                <td>HBS Online</td>
                <td>76</td>
                <td>58</td>
                <td>43</td>
              </tr>
              <tr>
                <td>Publishing</td>
                <td>274</td>
                <td>262</td>
                <td>262</td>
              </tr>
              <tr>
                <td>Endowment Distribution</td>
                <td>184</td>
                <td>173</td>
                <td>162</td>
              </tr>
              <tr>
                <td>Unrestricted, Current Use Gifts</td>
                <td>41</td>
                <td>37</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Restricted, Current Use Gifts</td>
                <td>19</td>
                <td>23</td>
                <td>28</td>
              </tr>
              <tr>
                <td>Housing, Rents, Interests Income &amp; Other</td>
                <td>17</td>
                <td>26</td>
                <td>28</td>
              </tr>
              <tr class="total">
                <td>Total Revenues</td>
                <td>$805</td>
                <td>$861</td>
                <td>$925</td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr class="title">
                <td>Expenses</td>
                <td>2021</td>
                <td>2020</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Salaries &amp; Benefitis</td>
                <td>$386</td>
                <td>$375</td>
                <td>$359</td>
              </tr>
              <tr>
                <td>Publishing &amp; Printing</td>
                <td>78</td>
                <td>81</td>
                <td>77</td>
              </tr>
              <tr>
                <td>Space &amp; Occupancy</td>
                <td>64</td>
                <td>71</td>
                <td>72</td>
              </tr>
              <tr>
                <td>Supplies &amp; Equipment</td>
                <td>10</td>
                <td>12</td>
                <td>13</td>
              </tr>
              <tr>
                <td>Professional Services</td>
                <td>46</td>
                <td>59</td>
                <td>72</td>
              </tr>
              <tr>
                <td>Fellowships</td>
                <td>53</td>
                <td>57</td>
                <td>51</td>
              </tr>
              <tr>
                <td>University Assessments</td>
                <td>21</td>
                <td>26</td>
                <td>26</td>
              </tr>
              <tr>
                <td>Debt Service</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Depreciation</td>
                <td>46</td>
                <td>45</td>
                <td>46</td>
              </tr>
              <tr>
                <td>Other Expenses</td>
                <td>73</td>
                <td>102</td>
                <td>102</td>
              </tr>
              <tr class="total">
                <td>Total Expenses</td>
                <td>$779</td>
                <td>$831</td>
                <td>$821</td>
              </tr>
              <tr>
                <td>Cash From Operations</td>
                <td>$26</td>
                <td>$30</td>
                <td>$104</td>
              </tr>
              <tr>
                <td>Depreciation</td>
                <td>46</td>
                <td>45</td>
                <td>46</td>
              </tr>
              <tr>
                <td>Non-Cash Items</td>
                <td>-</td>
                <td>1</td>
                <td>-</td>
              </tr>
              <tr class="total">
                <td>Cash Available from Capital Activities</td>
                <td>$72</td>
                <td>$76</td>
                <td>$150</td>
              </tr>
              <tr>
                <td>Capital Expenses</td>
                <td>$(22)</td>
                <td>$(43)</td>
                <td>$(38)</td>
              </tr>
              <tr>
                <td>Change in Capital Project-Prefunding</td>
                <td>(14)</td>
                <td>8</td>
                <td>(3)</td>
              </tr>
              <tr>
                <td>Use of Gifts for Capital Projects</td>
                <td>6</td>
                <td>5</td>
                <td>6</td>
              </tr>
              <tr class="total">
                <td>Net Capital Expenses</td>
                <td>$(30)</td>
                <td>$(30)</td>
                <td>$(35)</td>
              </tr>
              <tr>
                <td>New Borrowings</td>
                <td>$0</td>
                <td>$0</td>
                <td>$0</td>
              </tr>
              <tr>
                <td>Debt Principal Payment</td>
                <td>(7)</td>
                <td>(7)</td>
                <td>(9)</td>
              </tr>
              <tr>
                <td>Capitalization of Endowment Income</td>
                <td>(6)</td>
                <td>(3)</td>
                <td>(2)</td>
              </tr>
              <tr>
                <td>Decapitilization of Endowments</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Other Non-Reserve Activity</td>
                <td>7</td>
                <td>7</td>
                <td>(95)</td>
              </tr>
              <tr class="total">
                <td>Changes in Debt &amp; Other</td>
                <td>$(5)</td>
                <td>$(1)</td>
                <td>$(104)</td>
              </tr>
              <tr class="white">
                <td>Increase (Decrease) in Reserves</td>
                <td>$37</td>
                <td>$45</td>
                <td>$11</td>
              </tr>
              <tr class="white">
                <td>Beginning Reserves Balance</td>
                <td>$174</td>
                <td>$129</td>
                <td>$118</td>
              </tr>
              <tr class="white">
                <td>Ending Reserves Balance</td>
                <td>$211</td>
                <td>$174</td>
                <td>$129</td>
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

<style lang="scss" scoped>
</style>