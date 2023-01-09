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
                <td>2021</td>
                <td>2020</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Cash</td>
                <td>$124</td>
                <td>$124</td>
                <td>$105</td>
              </tr>
              <tr>
                <td>Current Use Reserves</td>
                <td>211</td>
                <td>174</td>
                <td>129</td>
              </tr>
              <tr>
                <td>Receiveables, Loans, &amp; Other Assets</td>
                <td>243</td>
                <td>221</td>
                <td>215</td>
              </tr>
              <tr>
                <td>Invested Funds</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="subtable">
                <td>Endowment</td>
                <td>4,915</td>
                <td>3,799</td>
                <td>3,675</td>
              </tr>
              <tr class="subtable">
                <td>Endowment Interests in Trusts Held by Others</td>
                <td>211</td>
                <td>167</td>
                <td>169</td>
              </tr>
              <tr class="subtable">
                <td>Endowment Pledges</td>
                <td>137</td>
                <td>119</td>
                <td>138</td>
              </tr>
              <tr class="subtable">
                <td>Undistributed General Investment Income</td>
                <td>2</td>
                <td>7</td>
                <td>3</td>
              </tr>
              <tr class="subtable">
                <td>Current Use Investments</td>
                <td>70</td>
                <td>63</td>
                <td>75</td>
              </tr>
              <tr class="subtable">
                <td>Current Use Pledges</td>
                <td>104</td>
                <td>122</td>
                <td>145</td>
              </tr>
              <tr>
                <td>Facilities, Net</td>
                <td>738</td>
                <td>762</td>
                <td>766</td>
              </tr>
              <tr class="total">
                <td>Total Assets</td>
                <td>$6,755</td>
                <td>$5,558</td>
                <td>$5,420</td>
              </tr>
            </tbody>
          </table>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Liabilities</td>
                <td>2021</td>
                <td>2020</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Deposits, Advances &amp; Other</td>
                <td>$69</td>
                <td>$62</td>
                <td>$95</td>
              </tr>
              <tr>
                <td>Deferred Revenue</td>
                <td>206</td>
                <td>191</td>
                <td>183</td>
              </tr>
              <tr>
                <td>Other Debt Owed to University</td>
                <td>79</td>
                <td>81</td>
                <td>31</td>
              </tr>
              <tr>
                <td>Building Debt</td>
                <td>33</td>
                <td>40</td>
                <td>46</td>
              </tr>
              <tr class="total">
                <td>Total Liabilities</td>
                <td>$387</td>
                <td>$374</td>
                <td>$355</td>
              </tr>
            </tbody>
          </table>
          <table class="four">
            <tbody>
              <tr class="title">
                <td>Net Assets</td>
                <td>2021</td>
                <td>2020</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Current Use Reserves</td>
                <td>$211</td>
                <td>$174</td>
                <td>$129</td>
              </tr>
              <tr>
                <td>Endowment Funds</td>
                <td>5,265</td>
                <td>4,092</td>
                <td>3,985</td>
              </tr>
              <tr>
                <td>Current Use Funds</td>
                <td>174</td>
                <td>185</td>
                <td>220</td>
              </tr>
              <tr>
                <td>Unexpended Endowment Income</td>
                <td>2</td>
                <td>-</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Student Loan Funds</td>
                <td>11</td>
                <td>11</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Investment in Facilities</td>
                <td>705</td>
                <td>722</td>
                <td>720</td>
              </tr>
              <tr>
                <td>Total Net Assets</td>
                <td>$6,368</td>
                <td>$5,184</td>
                <td>$5,065</td>
              </tr>
              <tr class="total">
                <td>Total Liabilities + Net Assets</td>
                <td>$6,755</td>
                <td>$5,558</td>
                <td>$5,420</td>
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

<style lang="scss" scoped>
</style>