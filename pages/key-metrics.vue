<template>
  <div id="top">
    <div id="page-top">
      <TheMenu :main="main" :isPage="isPage" :title="title" />
    </div>
    <main id="maincontent">
      <article class="container">
        <div class="content">
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>
                      <h2>Financials <i>(in millions)</i></h2>
                    </td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Revenues</td>
                    <td>$966</td>
                    <td>$805</td>
                    <td>$861</td>
                    <td>$925</td>
                  </tr>
                  <tr>
                    <td>Expenses</td>
                    <td>$908</td>
                    <td>$779</td>
                    <td>$831</td>
                    <td>$821</td>
                  </tr>
                  <tr>
                    <td>Cash from Operations</td>
                    <td>$58</td>
                    <td>$26</td>
                    <td>$30</td>
                    <td>$104</td>
                  </tr>
                  <tr>
                    <td>Capital Investments</td>
                    <td>$43</td>
                    <td>$22</td>
                    <td>$43</td>
                    <td>$38</td>
                  </tr>
                  <tr>
                    <td>Building Debt Outstanding</td>
                    <td>$28</td>
                    <td>$33</td>
                    <td>$40</td>
                    <td>$46</td>
                  </tr>
                  <tr>
                    <td>Unrestricted Reserves</td>
                    <td>$227</td>
                    <td>$211</td>
                    <td>$174</td>
                    <td>$129</td>
                  </tr>
                  <tr>
                    <td>Endowment</td>
                    <td>$5,086</td>
                    <td>$5,265</td>
                    <td>$4,092</td>
                    <td>$3,985</td>
                  </tr>
                  <tr>
                    <td>Total Assets</td>
                    <td>$6,603</td>
                    <td>$6,755</td>
                    <td>$5,558</td>
                    <td>$5,420</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td><h2>MBA</h2></td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">Incoming Class</h3></td>
                  </tr>
                  <tr>
                    <td>Applications</td>
                    <td>8,264</td>
                    <td>9,773</td>
                    <td>9,304</td>
                    <td>9,228</td>
                  </tr>
                  <tr>
                    <td>Percent Admitted</td>
                    <td>15%</td>
                    <td>13%</td>
                    <td>13%</td>
                    <td>12%</td>
                  </tr>
                  <tr>
                    <td>Yield</td>
                    <td>86%</td>
                    <td>87%</td>
                    <td>85%</td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Gender: Female</td>
                    <td>46%</td>
                    <td>44%</td>
                    <td>43%</td>
                    <td>41%</td>
                  </tr>
                  <tr>
                    <td>International Citizenship</td>
                    <td>37%</td>
                    <td>33%</td>
                    <td>35%</td>
                    <td>34%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref" id="link-1">1</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keytan">
                    <td>American Indian / Alaska Native</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Asian</td>
                    <td>24%</td>
                    <td>19%</td>
                    <td>17%</td>
                    <td>21%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Black / African American</td>
                    <td>12%</td>
                    <td>11%</td>
                    <td>9%</td>
                    <td>7%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>11%</td>
                    <td>9%</td>
                    <td>11%</td>
                    <td>8%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>4%</td>
                    <td>6%</td>
                    <td>5%</td>
                    <td>3%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>White</td>
                    <td>47%</td>
                    <td>53%</td>
                    <td>57%</td>
                    <td>59%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report / Unknown</td>
                    <td>1%</td>
                    <td>1%</td>
                    <td>1%</td>
                    <td>2%</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">All Students</h3></td>
                  </tr>
                  <tr>
                    <td>Enrollment</td>
                    <td>1,870</td>
                    <td>1,609</td>
                    <td>1,877</td>
                    <td>1,881</td>
                  </tr>
                  <tr>
                    <td>Tuition</td>
                    <td>$73,440</td>
                    <td>$73,440</td>
                    <td>$73,440</td>
                    <td>$73,440</td>
                  </tr>
                  <tr>
                    <td>Average Fellowship Aid Per Student</td>
                    <td>$43,794</td>
                    <td>$42,786</td>
                    <td>$42,225</td>
                    <td>$42,034</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>Doctoral</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">Incoming Students</h3></td>
                  </tr>
                  <tr>
                    <td>Applications</td>
                    <td>896</td>
                    <td>995</td>
                    <td>797</td>
                    <td>748</td>
                  </tr>
                  <tr>
                    <td>Percent Admitted</td>
                    <td>4%</td>
                    <td>3%</td>
                    <td>4%</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>Yield</td>
                    <td>66%</td>
                    <td>68%</td>
                    <td>87%</td>
                    <td>81%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        Gender<a href="key-metrics#note-2"
                          ><div class="citeref" id="link-2">2</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keytan">
                    <td>Male</td>
                    <td>37%</td>
                    <td>50%</td>
                    <td>48%</td>
                    <td>43%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Female</td>
                    <td>63%</td>
                    <td>50%</td>
                    <td>52%</td>
                    <td>57%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Non-binary/ Gender Queer/ Other</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report/ Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td>International Citizenship</td>
                    <td>21%</td>
                    <td>38%</td>
                    <td>48%</td>
                    <td>29%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref">1</div></a
                        ><a href="key-metrics#note-2"
                          ><div class="citeref">2</div></a
                        ><a href="key-metrics#note-3"
                          ><div class="citeref" id="link-3">3</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keytan">
                    <td>American Indian / Alaska Native</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Asian/ Asian American</td>
                    <td>21%</td>
                    <td>15%</td>
                    <td>20%</td>
                    <td>24%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Black / African American</td>
                    <td>11%</td>
                    <td>0%</td>
                    <td>4%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>5%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>5%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>White</td>
                    <td>42%</td>
                    <td>46%</td>
                    <td>28%</td>
                    <td>38%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report / Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">All Students</h3></td>
                  </tr>
                  <tr>
                    <td>Enrollment</td>
                    <td>130</td>
                    <td>129</td>
                    <td>133</td>
                    <td>131</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>Executive Education</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Enrollment</td>
                    <td>10,575</td>
                    <td>13,101</td>
                    <td>10,881</td>
                    <td>12,605</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        Gender<a href="key-metrics#note-2"
                          ><div class="citeref">2</div></a
                        ><a href="key-metrics#note-4"
                          ><div class="citeref" id="link-4">4</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keywhite">
                    <td>Male</td>
                    <td>68%</td>
                    <td>68%</td>
                    <td>70%</td>
                    <td>72%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Female</td>
                    <td>32%</td>
                    <td>32%</td>
                    <td>30%</td>
                    <td>28%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Non-binary/ Gender Queer/ Other</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Did Not Report/ Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td>International Citizenship</td>
                    <td>63%</td>
                    <td>60%</td>
                    <td>69%</td>
                    <td>68%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref">1</div></a
                        ><a href="key-metrics#note-2"
                          ><div class="citeref">2</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keywhite">
                    <td>American Indian / Alaska Native</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Asian/ Asian American</td>
                    <td>12%</td>
                    <td>6%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Black / African American</td>
                    <td>9%</td>
                    <td>4%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>8%</td>
                    <td>4%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>2%</td>
                    <td>1%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>White</td>
                    <td>43%</td>
                    <td>22%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Did Not Report / Unknown</td>
                    <td>26%</td>
                    <td>64%</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>HBS Online</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Enrollment</td>
                    <td>40,667</td>
                    <td>38,725</td>
                    <td>29,192</td>
                    <td>19,568</td>
                  </tr>
                  <tr>
                    <td>CORe Participants</td>
                    <td>5,183</td>
                    <td>7,687</td>
                    <td>7,477</td>
                    <td>5,963</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>Faculty</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>Positions (full-time equivalents)</td>
                    <td>272</td>
                    <td>256</td>
                    <td>244</td>
                    <td>233</td>
                  </tr>
                  <tr>
                    <td>Positions (all)</td>
                    <td>322</td>
                    <td>293</td>
                    <td>280</td>
                    <td>267</td>
                  </tr>
                  <tr>
                    <td>Gender: Female</td>
                    <td>28%</td>
                    <td>27%</td>
                    <td>28%</td>
                    <td>26%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref">1</div></a
                        ><a href="key-metrics#note-2"
                          ><div class="citeref">2</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keywhite">
                    <td>American Indian / Alaska Native</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Asian</td>
                    <td>19%</td>
                    <td>19%</td>
                    <td>19%</td>
                    <td>19%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Black / African American</td>
                    <td>3%</td>
                    <td>3%</td>
                    <td>4%</td>
                    <td>3%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>2%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>4%</td>
                    <td>4%</td>
                    <td>4%</td>
                    <td>4%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keywhite">
                    <td>White</td>
                    <td>72%</td>
                    <td>71%</td>
                    <td>71%</td>
                    <td>72%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Did Not Report / Unknown</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <td>Teaching Materials</td>
                    <td>637</td>
                    <td>668</td>
                    <td>676</td>
                    <td>626</td>
                  </tr>
                  <tr>
                    <td>Research Articles on HBR.org</td>
                    <td>296</td>
                    <td>307</td>
                    <td>231</td>
                    <td>177</td>
                  </tr>
                  <tr>
                    <td>Books</td>
                    <td>22</td>
                    <td>16</td>
                    <td>15</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">Faculty Leadership</h3></td>
                  </tr>
                  <tr>
                    <td>Positions</td>
                    <td>46</td>
                    <td>44</td>
                    <td>47</td>
                    <td>46</td>
                  </tr>
                  <tr>
                    <td>Gender: Female</td>
                    <td>24%</td>
                    <td>25%</td>
                    <td>23%</td>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td>US Race / Ethnicity</td>
                  </tr>
                  <tr class="keytan">
                    <td>American Indian / Alaska Native</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Asian</td>
                    <td>17%</td>
                    <td>20%</td>
                    <td>17%</td>
                    <td>26%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Black / African American</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>4%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>2%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>13%</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>2%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>White</td>
                    <td>67%</td>
                    <td>75%</td>
                    <td>77%</td>
                    <td>70%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report / Unknown</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                    <td>&#8212;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="table-fade">
            <div class="overflow">
              <table class="five">
                <tbody>
                  <tr class="title">
                    <td>Staff</td>
                    <td>2022</td>
                    <td>2021</td>
                    <td>2020</td>
                    <td>2019</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer" id="link-5">
                        Positions<a href="key-metrics#note-5"
                          ><div class="citeref">5</div></a
                        >
                      </div>
                    </td>
                    <td>1,325</td>
                    <td>1,289</td>
                    <td>1,232</td>
                    <td>1,229</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Male</td>
                    <td>34%</td>
                    <td>35%</td>
                    <td>35%</td>
                    <td>35%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Female</td>
                    <td>65%</td>
                    <td>65%</td>
                    <td>65%</td>
                    <td>65%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Non-binary/ Gender Queer/ Other</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keywhite">
                    <td>Did Not Report/ Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref">1</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keytan">
                    <td>American Indian / Alaska Native</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Asian / Asian American</td>
                    <td>11%</td>
                    <td>11%</td>
                    <td>11%</td>
                    <td>10%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Black / African American</td>
                    <td>5%</td>
                    <td>5%</td>
                    <td>4%</td>
                    <td>4%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>7%</td>
                    <td>6%</td>
                    <td>6%</td>
                    <td>6%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>1%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr class="keytan">
                    <td>White</td>
                    <td>74%</td>
                    <td>76%</td>
                    <td>77%</td>
                    <td>79%</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report / Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                  </tr>
                  <tr>
                    <td><h3 class="keysubheader">Staff Leadership</h3></td>
                  </tr>
                  <tr>
                    <td>Positions</td>
                    <td>94</td>
                    <td>83</td>
                    <td>78</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <td>Gender: Female</td>
                    <td>55%</td>
                    <td>59%</td>
                    <td>55%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="citecontainer">
                        US Race / Ethnicity<a href="key-metrics#note-1"
                          ><div class="citeref">1</div></a
                        >
                      </div>
                    </td>
                  </tr>
                  <tr class="keytan">
                    <td>American Indian / Alaska Native</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Asian / Asian American</td>
                    <td>4%</td>
                    <td>4%</td>
                    <td>3%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Black / African American</td>
                    <td>2%</td>
                    <td>2%</td>
                    <td>1%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Hispanic / Latino / Latinx</td>
                    <td>1%</td>
                    <td>1%</td>
                    <td>1%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Multi-Race / Non-Hispanic</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Native Hawaiian / Other Pacific Islander</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>White</td>
                    <td>93%</td>
                    <td>93%</td>
                    <td>95%</td>
                    <td>&#8212;</td>
                  </tr>
                  <tr class="keytan">
                    <td>Did Not Report / Unknown</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>&#8212;</td>
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
          <Separator />
          <div class="spacer_xl"></div>
          <ol class="notelist">
            <li id="note-1">
              <div>
                <strong>US Race/Ethnicity</strong> is only collected for US
                citizens and permanent residents. Per federal guidelines, people
                who identify as Hispanic, Latino, or Latinx and any other race
                are represented as Hispanic, Latino, or Latinx only. People who
                identify with two or more races other than Hispanic, Latino, or
                Latinx are represented as Multi-Race , Non-Hispanic only.
                <a href="key-metrics#link-1" class="notearrow">&#129129;</a>
              </div>
            </li>
            <li id="note-2">
              <div>
                <strong>Dashes</strong> represent that data is not available.
                <a href="key-metrics#link-2" class="notearrow">&#129129;</a>
              </div>
            </li>
            <li id="note-3">
              <div>
                <strong>Doctoral US Race/Ethnicity</strong> numbers do not total
                100% because ethnicity is presented as % of total entering class
                but only represents US students.<a
                  href="key-metrics#link-3"
                  class="notearrow"
                  >&#129129;</a
                >
              </div>
            </li>
            <li id="note-4">
              <div>
                <strong>Executive Education Gender</strong> is reported for Open
                Enrollment Programs only, not all programs.
                <a href="key-metrics#link-4" class="notearrow">&#129129;</a>
              </div>
            </li>
            <li id="note-5">
              <div>
                <strong>Staff</strong> includes employees classified as admin &
                professional, internal post docs, service & trade hourly, and
                support staff.
                <a href="key-metrics#link-5" class="notearrow">&#129129;</a>
              </div>
            </li>
            <li id="note-6">
              <div>
                <p>
                  <strong>GHG Emissions</strong> is calculated using the
                  location-based reporting methodology and Harvard University
                  follows The Climate Registry (TCR) General Reporting Protocol
                  for the Voluntary Greenhouse Gas (GHG) Reporting Program. The
                  GHG inventory consists of direct emissions from onsite fuel
                  combustion (Scope 1) and indirect emissions from purchased
                  electricity (Scope 2) sources.
                </p>
                <p>
                  &#8226; The GHG data is calculated using the location-based
                  reporting methodology (recommend this is noted publicly in the
                  report).
                </p>
                <p>
                  &#8226; In addition to the reduced occupancy impacting the %
                  reduction, it was also impacted by the increased ventilation
                  to help reduce disease transmission (which increases GHG
                  emissions).
                </p>
                <p>
                  &#8226; EHS calculates Harvard University’s GHG emissions
                  factor, but there is a delay in getting current grid data to
                  feed into that calculation.<a
                    href="key-metrics#link-6"
                    class="notearrow"
                    >&#129129;</a
                  >
                </p>
              </div>
            </li>
            <li id="note-7">
              <div>
                <strong>Energy</strong> includes steam and electricity from
                Harvard’s Blackstone Steam Plant, electricity from the grid,
                electricity from our solar panels (solar renewable energy
                credits [SRECs], which represent the environmental benefit, are
                sold to the Harvard Utility to meet its state renewable energy
                requirements), natural gas used in boilers, cogeneration units
                and kitchens, along with diesel used in backup generators.
                <p>
                  &#8226; In addition to the reduced occupancy impacting the %
                  reduction, it was also impacted by the increased ventilation
                  to help reduce risk of disease transmission (which increases
                  energy use).
                  <a href="key-metrics#link-7" class="notearrow">&#129129;</a>
                </p>
              </div>
            </li>
            <li id="note-8">
              <div>
                <p>
                  <strong>Water</strong> represents the total water withdrawal
                  from our water utility for irrigation, domestic, kitchen and
                  chilled water plant cooling tower needs.
                </p>
                <p>
                  &#8226; In addition to the reduced occupancy impacting the %
                  reduction (less domestic uses – toilets/sinks/kitchen), CY2021
                  was extremely rainy so irrigation needs were significantly
                  down. We had nearly double the inches of rainfall we typically
                  see across the irrigating season.
                  <a href="key-metrics#link-8" class="notearrow">&#129129;</a>
                </p>
              </div>
            </li>
            <li id="note-9">
              <div>
                <p>
                  <strong>Municipal Solid Waste</strong> is the trash hauled
                  from buildings from typical campus operations. It does not
                  include construction waste, recycling, electronic waste, waste
                  disposed of as part of contracted services, or anaerobic
                  digestion for organics streams.
                </p>
                <p>
                  &#8226; Municipal Solid Waste is made up of our Trash stream
                  and does not count our Recycling/Anaerobic Digestion for
                  Organics streams.
                  <a href="key-metrics#link-9" class="notearrow">&#129129;</a>
                </p>
              </div>
            </li>
          </ol>
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
      title: "Key Metrics",
    };
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        class: "page ",
      },
    };
  },
};
</script>
<style lang="scss" scoped></style>
