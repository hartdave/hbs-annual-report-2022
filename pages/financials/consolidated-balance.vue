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
          <h1>
            {{ this.subTitle }}
          </h1>
          <p class="note">
            (all in millions of dollars for the fiscal year ending June 30)
          </p>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Assets</td>
                <td>2022</td>
                <td>2021</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Cash</td>
                <td>$133</td>
                <td>$124</td>
                <td>$124</td>
              </tr>
              <tr>
                <td>Current Use Reserves</td>
                <td>227</td>
                <td>211</td>
                <td>174</td>
              </tr>
              <tr>
                <td>Receiveables, Loans, &amp; Other Assets</td>
                <td>251</td>
                <td>243</td>
                <td>221</td>
              </tr>
              <tr>
                <td>Invested Funds</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="subtable">
                <td>Endowment</td>
                <td>4,747</td>
                <td>4,915</td>
                <td>3,799</td>
              </tr>
              <tr class="subtable">
                <td>Endowment Interests in Trusts Held by Others</td>
                <td>178</td>
                <td>211</td>
                <td>167</td>
              </tr>
              <tr class="subtable">
                <td>Endowment Pledges</td>
                <td>148</td>
                <td>137</td>
                <td>119</td>
              </tr>
              <tr class="subtable">
                <td>Undistributed General Investment Income</td>
                <td>13</td>
                <td>2</td>
                <td>7</td>
              </tr>
              <tr class="subtable">
                <td>Current Use Investments</td>
                <td>63</td>
                <td>70</td>
                <td>63</td>
              </tr>
              <tr class="subtable">
                <td>Current Use Pledges</td>
                <td>110</td>
                <td>104</td>
                <td>122</td>
              </tr>
              <tr>
                <td>Facilities, Net</td>
                <td>733</td>
                <td>738</td>
                <td>762</td>
              </tr>
              <tr class="total">
                <td>Total Assets</td>
                <td>$6,603</td>
                <td>$6,755</td>
                <td>$5,558</td>
              </tr>
            </tbody>
          </table>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Liabilities</td>
                <td>2022</td>
                <td>2021</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Deposits, Advances &amp; Other</td>
                <td>$94</td>
                <td>$69</td>
                <td>$62</td>
              </tr>
              <tr>
                <td>Deferred Revenue</td>
                <td>194</td>
                <td>206</td>
                <td>191</td>
              </tr>
              <tr>
                <td>Other Debt Owed to University</td>
                <td>83</td>
                <td>79</td>
                <td>81</td>
              </tr>
              <tr>
                <td>Building Debt</td>
                <td>28</td>
                <td>33</td>
                <td>40</td>
              </tr>
              <tr class="total">
                <td>Total Liabilities</td>
                <td>$399</td>
                <td>$387</td>
                <td>$374</td>
              </tr>
            </tbody>
          </table>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Net Assets</td>
                <td>2022</td>
                <td>2021</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>Current Use Reserves</td>
                <td>$227</td>
                <td>$211</td>
                <td>$174</td>
              </tr>
              <tr>
                <td>Endowment Funds</td>
                <td>5,086</td>
                <td>5,265</td>
                <td>4,092</td>
              </tr>
              <tr>
                <td>Current Use Funds</td>
                <td>172</td>
                <td>174</td>
                <td>185</td>
              </tr>
              <tr>
                <td>Unexpended Endowment Income</td>
                <td>3</td>
                <td>2</td>
                <td>-</td>
              </tr>
              <tr>
                <td>Student Loan Funds</td>
                <td>11</td>
                <td>11</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Investment in Facilities</td>
                <td>705</td>
                <td>705</td>
                <td>722</td>
              </tr>
              <tr>
                <td>Total Net Assets</td>
                <td>$6,204</td>
                <td>$6,368</td>
                <td>$5,184</td>
              </tr>
              <tr class="total">
                <td>Total Liabilities + Net Assets</td>
                <td>$6,603</td>
                <td>$6,755</td>
                <td>$5,558</td>
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
      subTitle: "Consolidated Balance Sheet",
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
