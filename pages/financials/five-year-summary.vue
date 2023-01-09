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
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Financials <i>(in millions)</i></td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Revenues</td>
                  <td>$805</td>
                  <td>$861</td>
                  <td>$925</td>
                  <td>$856</td>
                  <td>$800</td>
                </tr>
                <tr>
                  <td>Expenses</td>
                  <td>779</td>
                  <td>831</td>
                  <td>821</td>
                  <td>766</td>
                  <td>731</td>
                </tr>
                <tr>
                  <td>Cash from Operations</td>
                  <td>26</td>
                  <td>30</td>
                  <td>104</td>
                  <td>90</td>
                  <td>69</td>
                </tr>
                <tr>
                  <td>Capital Investments</td>
                  <td>22</td>
                  <td>43</td>
                  <td>38</td>
                  <td>92</td>
                  <td>78</td>
                </tr>
                <tr>
                  <td>Building Debt Outstanding</td>
                  <td>33</td>
                  <td>40</td>
                  <td>46</td>
                  <td>55</td>
                  <td>64</td>
                </tr>
                <tr>
                  <td>Unrestricted Reserves</td>
                  <td>211</td>
                  <td>174</td>
                  <td>129</td>
                  <td>118</td>
                  <td>145</td>
                </tr>
                <tr>
                  <td>Endowment</td>
                  <td>5,265</td>
                  <td>4,092</td>
                  <td>3,985</td>
                  <td>3,787</td>
                  <td>3,472</td>
                </tr>
                <tr>
                  <td>Total Assets</td>
                  <td>$6,755</td>
                  <td>$5,558</td>
                  <td>$5,420</td>
                  <td>$5,208</td>
                  <td>$4,821</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>MBA</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Applications</td>
                  <td>9,773</td>
                  <td>9,304</td>
                  <td>9,228</td>
                  <td>9,886</td>
                  <td>10,351</td>
                </tr>
                <tr>
                  <td>Percent Admitted</td>
                  <td>13%</td>
                  <td>13%</td>
                  <td>12%</td>
                  <td>11%</td>
                  <td>11%</td>
                </tr>
                <tr>
                  <td>Yield</td>
                  <td>87%</td>
                  <td>85%</td>
                  <td>89%</td>
                  <td>91%</td>
                  <td>91%</td>
                </tr>
                <tr>
                  <td>Enrollment</td>
                  <td>1,609</td>
                  <td>1,877</td>
                  <td>1,881</td>
                  <td>1,870</td>
                  <td>1,879</td>
                </tr>
                <tr>
                  <td>Tuition</td>
                  <td>$73,440</td>
                  <td>$73,440</td>
                  <td>$73,440</td>
                  <td>$72,000</td>
                  <td>$63,675</td>
                </tr>
                <tr>
                  <td>Average Fellowship Aid Per Student</td>
                  <td>$41,806</td>
                  <td>$42,225</td>
                  <td>$42,034</td>
                  <td>$38,959</td>
                  <td>$37,312</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Doctoral</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Applications</td>
                  <td>995</td>
                  <td>797</td>
                  <td>748</td>
                  <td>864</td>
                  <td>915</td>
                </tr>
                <tr>
                  <td>Percent Admitted</td>
                  <td>3%</td>
                  <td>4%</td>
                  <td>5%</td>
                  <td>4%</td>
                  <td>4%</td>
                </tr>
                <tr>
                  <td>Yield</td>
                  <td>68%</td>
                  <td>87%</td>
                  <td>81%</td>
                  <td>64%</td>
                  <td>79%</td>
                </tr>
                <tr>
                  <td>Enrollment</td>
                  <td>129</td>
                  <td>133</td>
                  <td>131</td>
                  <td>134</td>
                  <td>132</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Executive Education</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Enrollment</td>
                  <td>13,101</td>
                  <td>10,881</td>
                  <td>12,605</td>
                  <td>12,070</td>
                  <td>11,361</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>HBS Online</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Enrollment</td>
                  <td>39,566</td>
                  <td>29,192</td>
                  <td>19,568</td>
                  <td>12,936</td>
                  <td>9,142</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Faculty</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Faculty Positions (full-time equivalents)</td>
                  <td>256</td>
                  <td>244</td>
                  <td>233</td>
                  <td>225</td>
                  <td>233</td>
                </tr>
                <tr>
                  <td>Teaching Materials</td>
                  <td>668</td>
                  <td>676</td>
                  <td>626</td>
                  <td>642</td>
                  <td>573</td>
                </tr>
                <tr>
                  <td>Research Articles on HBR.org</td>
                  <td>307</td>
                  <td>231</td>
                  <td>177</td>
                  <td>199</td>
                  <td>182</td>
                </tr>
                <tr>
                  <td>Books</td>
                  <td>16</td>
                  <td>15</td>
                  <td>14</td>
                  <td>11</td>
                  <td>14</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Staff</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Staff Positions (full-time equivalents)</td>
                  <td>1,871</td>
                  <td>1,839</td>
                  <td>1,761</td>
                  <td>1,721</td>
                  <td>1,680</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="six">
                <tbody>
                <tr class="title">
                  <td>Publishing</td>
                  <td>2021</td>
                  <td>2020</td>
                  <td>2019</td>
                  <td>2018</td>
                  <td>2017</td>
                </tr>
                <tr>
                  <td>Cases Sold</td>
                  <td>15,392,000</td>
                  <td>15,209,000</td>
                  <td>14,539,000</td>
                  <td>15,062,000</td>
                  <td>14,859,000</td>
                </tr>
                <tr>
                  <td>Harvard ManageMentor Active Users</td>
                  <td>6,061,000</td>
                  <td>5,037,000</td>
                  <td>2,837,000</td>
                  <td>2,430,000</td>
                  <td>3,200,000</td>
                </tr>
                <tr>
                  <td>HBR.org Average Monthly Users</td>
                  <td>11,797,000</td>
                  <td>9,956,000</td>
                  <td>6,916,000</td>
                  <td>7,153,000</td>
                  <td>7,012,000</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
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
      subTitle: "5 Year Summary",
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