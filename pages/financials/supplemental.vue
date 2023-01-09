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
          <h2>Revenues</h2>
          <p>
            HBS funds its operations with cash from three primary sources: MBA
            tuition and fees; earned income from Harvard Business Publishing
            (HBP), Executive Education, and HBS Online; and philanthropic
            revenues (including current use gifts and distribution from the
            endowment).
          </p>
          <p>
            In fiscal 2021, the School's total revenues decreased by $56
            million, or 7 percent, to $805 million from $861 million in the
            prior year. The decrease primarily reflected the impact of COVID-19
            on the MBA Program and Executive Education. With physical distancing
            guidelines and international travel restrictions in effect,
            Executive Education pivoted to an all-virtual program portfolio from
            its traditional residential program model. The top-line decrease was
            partly offset by HBP and HBS Online, which generated record revenue
            in fiscal 2021.
          </p>
          <div class="split nopad">
            <div class="left">
              <Chart
                chartTitle="Revenue"
                chartSubtitle="(in millions)"
                :chartStats="[
                  {
                    id: 'chart-01',
                    label: 'FY17',
                    total: '800',
                    top: '925',
                  },
                  {
                    id: 'chart-02',
                    label: 'FY18',
                    total: '856',
                    top: '925',
                  },
                  {
                    id: 'chart-03',
                    label: 'FY19',
                    total: '925',
                    top: '925',
                  },
                  {
                    id: 'chart-04',
                    label: 'FY20',
                    total: '861',
                    top: '925',
                  },
                  {
                    id: 'chart-05',
                    label: 'FY21',
                    total: '805',
                    top: '925',
                  },
                ]"
              />
            </div>
            <div class="right">
              <div class="chart-title">
                <p class="title">Revenue Components</p>
              </div>
              <ul class="tan-list">
                <li><span>34%</span> Publishing</li>
                <li><span>30%</span> Endowment Distribution &amp; Current</li>
                <li><span>14%</span> MBA Tuition &amp; Fees</li>
                <li><span>10%</span> Executive Education Tuition</li>
                <li><span>9%</span> HBS Online</li>
                <li><span>3%</span> Housing, Rents, &amp; Other</li>
              </ul>
            </div>
          </div>
          <div class="spacer_lg"></div>
          <h3>MBA Tuition &amp; Fees</h3>
          <p>
            Student tuition and fee revenue from the MBA program decreased 17
            percent to $113 million from $136 million in fiscal 2020, as a
            number of students chose to take advantage of the School's deferral
            and leave policies during the pandemic. To put the data in context,
            enrollment in fiscal 2021 was 1,530 students, 17 percent lower than
            the prior year's enrollment of 1,847 students. The latter number is
            in line with the School's average enrollment between fiscal 2016 and
            fiscal 2020.
          </p>
          <p>
            First-year MBA tuition in fiscal 2021 was $73,440, flat with fiscal
            2020. Combined tuition and fees for fiscal 2021 were at the lower
            end of the seven peer schools tracked by HBS and amounted to 14
            percent of the School's total revenues.
          </p>
          <p></p>
          <h3>Harvard Business Publishing</h3>
          <p>
            Four of HBP's five market-facing groups—Harvard Business Review,
            Higher Education, Advertising, and Press—delivered year-over-year
            revenue growth in fiscal 2021. As a result, total Publishing revenue
            increased 5 percent from fiscal 2020 to $274 million.
          </p>
          <p>
            HBP international revenue continued its steady growth, increasing 8
            percent and representing approximately 40 percent of the group's
            total annual sales in fiscal 2021.
          </p>
          <p>
            As one of the world's most respected business journals, Harvard
            Business Review continued to capitalize on the increasing appetite
            for digital content on the key themes of the day. The exploration of
            topics such as promoting racial equity in the workplace, managing
            during the pandemic, and the role of sustainability in the boardroom
            helped drive site traffic and user engagement across multiple
            channels. As a result, HBR group sales increased 10 percent
            year-over-year, while circulation grew 3 percent over the same
            period to a record 349,000.
          </p>
          <p>
            In addition, Harvard Business Review continued to gain momentum from
            the tiered subscription offer, introduced in fiscal 2019, that
            enables readers to choose between a digital, digital and print, or
            premium subscription. The offer helped attract a record monthly
            average of nearly 12 million visitors to the HBR.org website, an
            increase of 18 percent from the prior year.
          </p>
          <p>
            Higher Education sales of course materials for participant-centered
            learning in business education were up 8 percent from fiscal 2020.
            With mastery of hybrid teaching now a critical skill, the group
            continued to expand its thought leadership through webinars and
            online resources such as Inspiring Minds. This editorial section of
            the HBP website features motivational lessons and practical insights
            on a range of topics.
          </p>
          <p>
            Revenue from Corporate Learning declined 7 percent from the prior
            year. As a result of COVID-19, many corporate clients delayed the
            launch of contracted programs, although activity began to rebound at
            the end of the fiscal year.
          </p>
          <p>
            Revenue from Press, which has historically been dependent on sales
            at airports, bookstores, and other retail locations, improved 4
            percent from the prior year. The growth was related partly to
            increased licensing activity for foreign and audio rights.
          </p>
          <p>
            Total HBP revenue amounted to 34 percent of the School's total
            revenues in fiscal 2021, four percentage points higher than in
            fiscal 2020.
          </p>
          <h3>Executive Education</h3>
          <p>
            Executive Education tuition decreased by $65 million to $81 million
            in fiscal 2021 from $146 million in the prior year, reflecting the
            transition to a fully virtual set of programs throughout the year
            due to COVID-19.
          </p>
          <p>
            The group rapidly innovated, designed, and delivered 70 virtual
            Comprehensive Leadership Programs and Topic-Focused Programs for
            more than 4,400 global participants. Total participation across all
            Executive Education programs reached 13,101 in fiscal 2021, a 20
            percent increase over the prior year. The group also delivered
            virtual custom programs in a range of industries, piloting new
            delivery models that accommodated the needs of clients to reach
            large-scale audiences.
          </p>
          <p>
            Total Executive Education tuition revenue accounted for 10 percent
            of the School's total revenues in fiscal 2021, compared with 17
            percent of total revenues in fiscal 2020.
          </p>
          <h3>HBS Online</h3>
          <p>
            In fiscal 2021, HBS Online generated an operating surplus on a 31
            percent increase in revenue, which grew to $76 million from $58
            million in fiscal 2020.
          </p>
          <p>
            The growth of HBS Online since its creation has been remarkable,
            spurred by the demand for a high-quality online business education
            as a tool for career and personal advancement. Expanding its course
            portfolio with timely new offerings, HBS Online launched Strategy
            Execution, a course designed to equip aspiring managers with
            relevant tools, skills, and frameworks.
          </p>
          <p>
            As a new benchmark of its growth, HBS Online in fiscal 2021 reached
            a record 40,000 participants across the portfolio. This included 41
            percent women and 53 percent international students.
          </p>
          <p>
            Total HBS Online revenue amounted to 9 percent of the School's total
            revenues in fiscal 2021, compared with 7 percent for the prior year.
          </p>
          <div class="float-right">
            <Chart
              chartTitle="Cash Received From Gifts"
              chartSubtitle="(in millions)"
              :top="200"
              :chartStats="[
                {
                  id: 'chart-06',
                  label: 'FY17',
                  total: '190',
                  top: '190',
                },
                {
                  id: 'chart-07',
                  label: 'FY18',
                  total: '186',
                  top: '190',
                },
                {
                  id: 'chart-08',
                  label: 'FY19',
                  total: '151',
                  top: '190',
                },
                {
                  id: 'chart-09',
                  label: 'FY20',
                  total: '121',
                  top: '190',
                },
                {
                  id: 'chart-10',
                  label: 'FY21',
                  total: '149',
                  top: '190',
                },
              ]"
            />
          </div>
          <h3>Gifts &amp; Endowment</h3>
                    <div class="float-right">
            <Chart
              chartTitle="Cash From Operations"
              chartSubtitle="(in millions)"
              :chartStats="[
                {
                  id: 'chart-11',
                  label: 'FY17',
                  total: '69',
                  top: '104',
                },
                {
                  id: 'chart-12',
                  label: 'FY18',
                  total: '90',
                  top: '104',
                },
                {
                  id: 'chart-13',
                  label: 'FY19',
                  total: '104',
                  top: '104',
                },
                {
                  id: 'chart-14',
                  label: 'FY20',
                  total: '30',
                  top: '104',
                },
                {
                  id: 'chart-15',
                  label: 'FY21',
                  total: '26',
                  top: '104',
                },
              ]"
            />
          </div>
          <p>
            Philanthropic revenue has long been vital to sustaining the School's
            annual operations. In fiscal 2021, total revenue from the School's
            three philanthropic sources—distribution from the endowment,
            unrestricted current use gifts, and restricted current use
            gifts—increased to $244 million from $233 million in fiscal 2020.
            This revenue amounted to 30 percent of the School's total revenues,
            compared with 27 percent a year earlier. For the University as a
            whole, philanthropic revenue amounted to 49 percent of total
            operating revenues for fiscal 2021.
          </p>
          <p>
            The School's annual endowment distribution for fiscal 2021 increased
            6 percent from the prior year to $184 million, amounting to 23
            percent of total revenue. In any given year, the change in the
            endowment distribution is governed by three factors: a specified
            rate increase set by the University, which in fiscal 2021 was 2.5
            percent; cash transfers by the School to the endowment reserve; and
            new gifts to the endowment, which currently consists of more than
            1,000 discrete funds established over the years by individual
            donors, corporations, and reunion classes. The School budgets the
            use of endowment distributions to support operations in accordance
            with the donors' intentions and the terms of each gift.
          </p>
                    <div class="float-right">
            <Chart
              chartTitle="Unrestricted Reserves"
              chartSubtitle="(in millions)"
              :chartStats="[
                {
                  id: 'chart-16',
                  label: 'FY17',
                  total: '145',
                  top: '211',
                },
                {
                  id: 'chart-17',
                  label: 'FY18',
                  total: '118',
                  top: '211',
                },
                {
                  id: 'chart-18',
                  label: 'FY19',
                  total: '129',
                  top: '211',
                },
                {
                  id: 'chart-19',
                  label: 'FY20',
                  total: '174',
                  top: '211',
                },
                {
                  id: 'chart-20',
                  label: 'FY21',
                  total: '211',
                  top: '211',
                },
              ]"
            />
          </div>
          <p>
            Harvard is obligated to preserve the purchasing power of the
            endowment by spending only a small fraction of its value each year.
            Spending more than that over time, for whatever reason, would
            privilege the present over the future in a manner inconsistent with
            an endowment's fundamental purpose of maintaining intergenerational
            equity.
          </p>
          <p>
            The University executes on this obligation in determining each
            year's endowment payout rate—that is, the percentage of the
            endowment's fair market value withdrawn and distributed annually for
            operations and for one-time or time-limited strategic purposes. This
            rate applies to HBS and to all schools at Harvard.
          </p>
          <div class="split nopad">
            <div class="left">
              <Chart
                chartTitle="Endowment Distribution"
                chartSubtitle="(in millions)"
                :chartStats="[
                  {
                    id: 'chart-21',
                    label: 'FY17',
                    total: '146',
                    top: '184',
                  },
                  {
                    id: 'chart-22',
                    label: 'FY18',
                    total: '150',
                    top: '184',
                  },
                  {
                    id: 'chart-23',
                    label: 'FY19',
                    total: '162',
                    top: '184',
                  },
                  {
                    id: 'chart-24',
                    label: 'FY20',
                    total: '173',
                    top: '184',
                  },
                  {
                    id: 'chart-25',
                    label: 'FY21',
                    total: '184',
                    top: '184',
                  },
                ]"
              />
            </div>
            <div class="right">
              <div class="chart-title">
                <p class="title">Endowment Distribution Components</p>
              </div>
              <ul class="tan-list">
                <li><span>34%</span> Professorships</li>
                <li><span>24%</span> Financial Aid</li>
                <li><span>16%</span> Unrestricted</li>
                <li><span>8%</span> Other</li>
                <li><span>7%</span> Special Initiatives</li>
                <li><span>6%</span> Research</li>
                <li><span>5%</span> Building Operations</li>
              </ul>
            </div>
          </div>
          <div class="spacer_lg"></div>
          <p>
            Consistent with the long-term goal of preserving the value of the
            endowment in real terms (after inflation) and generating a
            predictable stream of available income, the University's targeted
            annual payout range is 5.0 to 5.5 percent of market value. The
            payout rate for fiscal 2021 met that target at 5.2 percent,
            consistent with the prior year.
          </p>
          <p>
            The utilization of a payout formula means that the annual payout
            rate is generally lower following years of relatively high
            investment returns, and higher following years of lower investment
            returns. Adjustments can be made in succeeding years, keeping in
            mind the long-term payout goals of balancing budgetary stability
            with the preservation of the endowment's purchasing power. Each year
            the Harvard Corporation approves the final distribution amount.
          </p>
          <p>
            Funds within the HBS endowment, along with those of the other
            Harvard schools, are managed by Harvard Management Company (HMC), a
            nonprofit, wholly-owned subsidiary of the University. HMC has
            managed the Harvard endowment portfolio since 1974. Its mission is
            to ensure the University has the financial resources to confidently
            maintain and expand its leadership in education and research for
            future generations.
          </p>
          <p>
            HMC's investment portfolio is evolving. Repositioning of the
            portfolio's liquid assets— public equities and hedge funds—is well
            underway. Given the nature of HMC's illiquid investments—private
            equity, real estate, and natural resources—restructuring this
            portion of the portfolio will span multiple years.
          </p>
          <p>
            The return on endowment assets for fiscal 2021, net of investment
            expenses and fees, was 33.6 percent, compared with 7.3 percent and
            6.5 percent endowment returns, respectively, for the two prior
            fiscal years.
          </p>
          <p>
            The value of the University endowment grew to $53.2 billion in
            fiscal 2021—an increase of 27 percent from $41.9 billion a year
            earlier. This value reflects investment returns, net of expenses and
            fees, as well as cash gifts to the endowment received during the
            year, net of the University's annual distributions and
            decapitalizations.
          </p>
          <p>
            The fiscal 2021 year-end market value of the HBS endowment was $5.3
            billion as of June 30, 2021, compared with $4.1 billion a year
            earlier. This growth reflected the return on the University
            endowment, less the School's annual distribution and
            decapitalizations, offset by endowment gifts received by HBS during
            the year.
          </p>
          <p>
            HBS received gifts from more than 10,500 donors in fiscal 2021,
            including MBA, Doctoral, and Executive Education program alumni, as
            well as friends of the School. Approximately 20 percent of the
            School's MBA alumni gave to HBS in fiscal 2021.
          </p>
          <p>
            Total cash received from gifts in fiscal 2021, including new
            endowment gifts and gifts for capital construction projects,
            payments on prior years' pledges, and restricted and unrestricted
            current use giving, was $149 million, compared with $121 million in
            the prior year. Cash giving to the endowment increased to $80
            million, from $56 million in fiscal 2020. Cash giving for
            construction projects totaled $8 million, compared with $5 million
            in the prior year.
          </p>
          <p>
            Current use giving—both restricted and unrestricted—provides crucial
            funding for innovation across the School. Because current use gifts
            can be spent immediately, they have a significant impact on cash
            from operations and, therefore, the School's ability to capitalize
            on emerging strategic opportunities. For example, current use giving
            has enabled the School to enhance the Harvard Innovation Labs
            ecosystem, expand the reach of HBS Online, and broaden the faculty's
            ambitious research agenda.
          </p>
          <p>
            Growing unrestricted current use giving to a sustainable annual
            level of $40 million was one of the major goals of The Campaign for
            Harvard Business School, which concluded in fiscal 2018. In fiscal
            2021, revenue from these flexible current use gifts totaled $41
            million. This represented an increase of 11 percent from $37 million
            a year earlier, surpassing expectations in light of the
            pandemic-related economic disruption. Going forward, sustaining the
            HBS community's remarkable commitment to unrestricted current use
            giving will be instrumental in achieving the mission of the School.
          </p>
          <div class="float-right">
            <div class="chart-title">
              <p class="title">Endowment <span>(in millions)</span></p>
            </div>
            <ul class="tan-list two-col">
              <li class="bold"><span>FY 21</span> <span>$5,265</span></li>
              <li><span>FY 20</span> <span>4,092</span></li>
              <li><span>FY 19</span> <span>3,985</span></li>
              <li><span>FY 18</span> <span>3,787</span></li>
              <li><span>FY 17</span><span> 3,472</span></li>
            </ul>
          </div>
          <p>
            Restricted current use giving typically varies from year to year in
            line with the School's changing fundraising priorities and strategic
            needs. In fiscal 2021, revenue from these restricted gifts decreased
            17 percent from a year earlier to $19 million.
          </p>
          <h3>Housing, Rents, Interest Income &amp; Other</h3>
          <p>
            With fewer students on campus in fiscal 2021, total revenue from the
            Housing, Rents &amp; Other category decreased by $5 million from the
            prior year to $16 million. Reflecting decreasing interest rates
            during fiscal 2021, the School reported interest income of $1
            million, a decrease of $4 million from fiscal 2020. Total housing,
            rents, interest income &amp; other revenue amounted to 2 percent of
            the School's total revenues in fiscal 2021, down one percentage
            point year-over-year.
          </p>
          <h2>Expenses</h2>
          <p>
            Executive Education, HBP, and HBS Online operating costs, as well as
            the School's faculty research costs, cut across multiple expense
            line items in the
            <nuxt-link to="/financials/statement-of-activity"
              >Statement of Activity and Cash Flows</nuxt-link
            >.
          </p>
          <div class="split nopad">
            <div class="left">
              <Chart
                chartTitle="Expenses"
                chartSubtitle="(in millions)"
                :chartStats="[
                  {
                    id: 'chart-26',
                    label: 'FY17',
                    total: '731',
                    top: '831',
                  },
                  {
                    id: 'chart-27',
                    label: 'FY18',
                    total: '766',
                    top: '831',
                  },
                  {
                    id: 'chart-28',
                    label: 'FY19',
                    total: '821',
                    top: '831',
                  },
                  {
                    id: 'chart-29',
                    label: 'FY20',
                    total: '831',
                    top: '831',
                  },
                  {
                    id: 'chart-30',
                    label: 'FY21',
                    total: '779',
                    top: '831',
                  },
                ]"
              />
            </div>
            <div class="right">
              <div class="chart-title">
                <p class="title">Expenses Components</p>
              </div>
              <ul class="tan-list">
                <li><span>50%</span> Salaries &amp; Benefits</li>
                <li><span>10%</span> Publishing &amp; Printing</li>
                <li><span>9%</span> Other</li>
                <li><span>8%</span> Space &amp; Occupancy</li>
                <li><span>7%</span> Fellowships</li>
                <li><span>6%</span> Professional Services</li>
                <li><span>6%</span> Depreciation</li>
                <li><span>3%</span> University Assessments</li>
                <li><span>2%</span> Supplies &amp; Equipment</li>
                <li><span>0%</span> Debt Service</li>
              </ul>
            </div>
          </div>
          <div class="spacer_lg"></div>
          <p>
            Faculty research expenses include a portion of faculty salaries and
            benefits expense, as well as direct costs for faculty support staff
            and travel, and for the School's network of global offices.
            Additionally, HBS allocates a portion of the costs associated with
            library resources, campus facilities, technology, and administration
            to this category. Faculty research expenses totaled $126 million in
            fiscal 2021, comprising 16 percent of the School's operating budget.
          </p>
          <p>
            Although HBS characterizes costs charged to HBP, HBS Online, and
            Executive Education as operating expenses, in a profit-seeking
            enterprise they would in large part be considered cost of goods
            sold. These expenses include direct costs for staff compensation,
            specialized outside professional services in information technology
            (IT) and other functional areas, marketing costs, and residence
            expenses for executive program participants.
          </p>
          <p>
            Total operating expenses for fiscal 2021 were $779 million, a
            decrease of $52 million, or 6 percent, from $831 million for fiscal
            2020. The decrease was primarily attributable to a reduction in
            program activity as a result of COVID-19.
          </p>
          <h2>Salaries &amp; Benefits</h2>
          <p>
            Compensation for faculty and administrative staff is the largest
            expense at HBS. The School's salaries and benefits expense for
            fiscal 2021 increased 3 percent to $386 million, from $375 million
            in fiscal 2020. This represented 50 percent of the School's total
            operating costs, compared with 45 percent in the prior year. The
            increase was driven by investments to grow the HBS faculty. The
            change in salaries and benefits also was influenced by the
            resumption of the bonus program and, to a lesser extent, a voluntary
            early retirement program for staff with a minimum of 10 years of
            University service.
          </p>
          <p>
            Expanding the size and diversity of the faculty is a strategic
            priority for the School. This enhances the strength of our MBA and
            Doctoral Programs, drives the growth of HBP, Executive Education,
            and HBS Online, and expands our ability to conduct cutting-edge
            research. Fiscal 2021 was a strong year for faculty recruiting and
            promotions. In all, 13 candidates accepted Assistant Professor
            positions, and another 6 faculty members received promotions to
            associate or tenured positions. The total number of faculty, as
            measured in full-time equivalent (FTE), can rise or fall in any
            given year reflecting retirements, departures, and fluctuations in
            recruiting activity. Net of retirements and departures, the size of
            the HBS faculty increased to 256 FTEs in fiscal 2021, from 244 FTEs
            a year earlier.
          </p>
          <p>
            The School's administrative staff grew to a budgeted 1,871 FTEs in
            fiscal 2021, from 1,839 in the prior year. To capitalize on new
            opportunities, the School invested to expand the faculty, further
            enhance HBP, and increase Information Technology staffing to
            accommodate the growth in hybrid learning.
          </p>
          <h2>Fellowships</h2>
          <p>
            The School categorizes fellowships, or financial aid, as an expense
            line item on the Statement of Activity and Cash Flows. Making
            education at HBS affordable to a broad cross section of applicants,
            regardless of their financial circumstances, is a longstanding goal
            of the School.
          </p>
          <p>
            The prospect of entering or returning to the workforce with high
            levels of education debt can deter strong MBA candidates from
            applying to HBS and restrict their career choices upon graduation.
            This is particularly true for younger students, women, those from
            outside the United States, and students whose early career paths
            have not enabled them to reduce their undergraduate loans.
            Consequently, the School strives to assist students in minimizing
            their debt at graduation by ensuring that fellowship support keeps
            pace with tuition and fees.
          </p>
          <p>
            Total Fellowships expense for fiscal 2021, including assistance for
            MBA students, Doctoral candidates, and a limited number of Executive
            Education participants, decreased by $4 million, or 7 percent, from
            fiscal 2020 to $53 million. The decrease in fellowship expense was
            strictly a function of the decline in student enrollment, not the
            size of the fellowships. Fellowships amounted to 7 percent of the
            School's total operating costs in fiscal 2021, consistent with the
            prior year.
          </p>
          <p>
            Helping students navigate a difficult job market hampered by
            COVID-19, HBS expanded its Rock Summer Fellows program from an
            average of 100 students to 350 students. The program affords MBA
            students between their first and second years the opportunity to
            explore entrepreneurial paths, both as founders and as those
            interested in joining early-stage startups.
          </p>
          <p>
            Approximately half of the School's MBA students currently receive
            fellowships, which cover an average of more than 50 percent of a
            student's total tuition. About 27 percent of total tuition—more than
            $30 million—was awarded as fellowships in fiscal 2021.
          </p>
          <p>
            Average fellowship support per student totaled nearly $43,000 in
            fiscal 2021 and was up slightly from the prior year. Over the past
            five fiscal years, the School's average two-year MBA fellowship
            award has grown from nearly $69,000 for the class of 2017 to more
            than $81,000 for the class of 2022.
          </p>
          <p>
            Funding for fellowships comes from restricted endowment and current
            use giving by HBS alumni and friends. These funds are supplemented
            by unrestricted funds as necessary, which totaled $5.5 million in
            fiscal 2021.
          </p>
          <h2>Publishing &amp; Printing</h2>
          <p>
            This expense category includes a portion of HBP's production costs
            plus a small amount of spending related to the School's printed
            materials and publications. The production costs include, for
            example, Harvard Business Review's printing expense. They also
            include strategic investments in digital infrastructure and content
            designed to extend the group's record of consistent growth at a time
            of significant change in the way people consume information.
          </p>
          <p>
            Publishing and printing expenses for fiscal 2021 decreased by $3
            million, or 4 percent, from the prior year to $78 million. This
            result reflected a combination of factors, including the School's
            initiative to reduce printing expenses. Printing and publishing
            amounted to 10 percent total operating costs, consistent with the
            prior year.
          </p>
          <h2>Space &amp; Occupancy</h2>
          <p>
            The HBS campus includes 36 buildings encompassing more than 1.9
            million square feet of occupied space. Space and occupancy expenses
            include costs related to maintaining and operating the School's
            buildings and campus infrastructure. Additionally, facilities
            improvement and renovation costs that do not qualify as capital
            expenses are generally included in this category.
          </p>
          <p>
            Also included are expenses related to dining facilities and other
            campus services, costs associated with leased space for HBP, HBS
            Online, and the School's global offices, as well as residence costs
            for Executive Education program participants.
          </p>
          <p>
            With fiscal 2021 enrollment down due to the pandemic, the School's
            space and occupancy expenses for fiscal 2021 declined by $7 million,
            or 10 percent, from the prior year to $64 million. Space and
            occupancy expense accounted for 8 percent of the School's total
            operating costs in fiscal 2021, down one percentage point from the
            prior year.
          </p>
          <h2>Professional Services</h2>
          <p>
            A large portion of the School's professional services expense is
            related to spending that a for-profit business would categorize as
            cost of goods sold.
          </p>
          <p>
            For fiscal year 2021, professional services expenses decreased $13
            million, or 22 percent, from the prior year to $46 million. The
            decline was primarily attributable to the decrease in on-campus
            activity. A portion of the variance stemmed from the
            recategorization of Executive Education faculty payments from the
            professional services line item to the salaries &amp; benefits line
            item beginning in fiscal 2021. Professional services expenses
            amounted to 6 percent of total operating costs, down from 7 percent
            in fiscal 2020.
          </p>
          <p>
            IT spending represented nearly 11 percent of the School's total
            operating expenses in fiscal 2021. Controlling IT costs is an
            important financial priority for the School, and toward that end HBS
            has begun to shift toward software-as-a-service platforms rather
            than custom-developed applications. The School also is moving toward
            greater use of third-party IT service providers and transitioning IT
            applications to the cloud.
          </p>
          <h2>Supplies &amp; Equipment &amp; Other Expenses</h2>
          <p>
            Supplies and equipment expenses for fiscal 2021 decreased by $2
            million, or 17 percent, from the prior year to $10 million, or 1
            percent of the School's total operating costs. In the other expenses
            category, fiscal 2021 spending was $73 million, down 28 percent from
            the prior year. This amounted to 9 percent of the School's total
            operating costs in both fiscal years.
          </p>
          <p>
            As with other line items on the income statement, the reduction in
            on-campus activity due to COVID-19 resulted in significant savings
            in the other expenses line. The largest expense decreases occurred
            in areas such as advertising, contingent labor, and technical
            services.
          </p>

          <h2>Debt Service</h2>
          <p>
            HBS finances major capital projects with a mix of three sources of
            funding: gifts, unrestricted reserves of internally generated cash,
            and the strategic use of debt financed through the University.
          </p>
          <p>
            The HBS balance sheet historically has been only modestly leveraged,
            and debt leverage remained low in fiscal 2021.
          </p>
          <p>
            HBS paid down $7 million in building debt in fiscal 2021, consistent
            with the prior year. The School's year-end fiscal 2021 building
            debt-to-asset ratio decreased to 0.5 percent from 0.8 percent in the
            prior year. Other University debt decreased by $2 million to $79
            million.
          </p>
          <p>
            The School's debt service expense consists of interest payments to
            the University and is covered by using cash from operations. Fiscal
            2021 debt service expense was $2 million, down by $1 million from
            the prior year. As in fiscal 2020, this expense was mainly
            associated with borrowings to finance prior years' campus expansion.
            Consistent with the four prior years, the interest portion of the
            School's debt service amounted to less than 1 percent of total
            operating costs in fiscal 2021.
          </p>
          <h2>University Assessments</h2>
          <p>
            The University Assessments expense encompasses services provided to
            HBS by Harvard University, including payroll and benefits
            administration, processing of accounts receivable and payable, and
            legal services. The amount charged to HBS in any given year is
            primarily calculated as a percentage of the School's total expenses.
            The School's expense in fiscal 2021 for these assessments declined
            $5 million from the prior year to $21 million, amounting to 3
            percent of total operating costs. The decrease was driven by the
            University's one-time waiver of the Academic Initiatives Fund in
            light of the uncertain extent and duration of the pandemic.
          </p>
          <h2>Depreciation</h2>
          <p>
            The School computes depreciation using the straight-line method over
            the estimated useful lives of the assets. The depreciation expense
            for fiscal 2021 increased by $1 million, or 2 percent, from the
            prior year to $46 million. The School's depreciation expense for
            fiscal 2021 amounted to 6 percent of total operating costs, compared
            with 5 percent a year earlier.
          </p>

          <h2>Cash Before Capital Activites</h2>
          <p>
            Cash from operations totaled $26 million in fiscal 2021, compared
            with $30 million in fiscal 2020. In a year marked by uncertainty and
            disruption, the School's ability to achieve results that
            outperformed expectations reflected fiscal discipline, prudent
            expense reductions, and higher-than-anticipated revenue from HBP and
            HBS Online.
          </p>
          <h2>Net Capital Expenses</h2>
          <p>
            Given the uncertain financial outlook heading into fiscal 2021,
            capital spending was limited to mission-critical projects. As a
            result, total capital expenses for fiscal 2021 decreased to $22
            million from $43 million in the prior year.
          </p>
          <p>
            The most significant project was the School's effort to create
            hybrid classrooms at a cost of $7.6 million. This represents a
            long-term investment that can be leveraged to support hybrid
            learning in many contexts.
          </p>
          <p>
            The School's net capital expenses for fiscal 2021 totaled $30
            million, consistent with the prior year.
          </p>
          <h2>Changes in Debt &amp; Other</h2>
          <p>
            The School's debt and other cash activities decreased by $5 million
            in fiscal 2021, compared with a decrease of $1 million in the prior
            year.
          </p>
          <p>
            Because gifts, internally generated cash, and unrestricted reserves
            have been available and sufficient to finance capital activities,
            fiscal 2021 marked the School's 13th consecutive year with no new
            borrowings. Debt principal payments were $7 million in fiscal 2021,
            consistent with the prior year.
          </p>
          <p>
            Capitalization of endowment income—or cash used to purchase
            endowment units— was a $6 million use of cash in fiscal 2021, up $3
            million from the prior year. In compliance with federal and state
            legal requirements, the School's objective is to spend as much of
            the endowment distribution as possible in any given year, according
            to the terms of each gift. Funds unspent as a result of gift
            restrictions are generally reinvested in the endowment.
          </p>
          <p>
            In compliance with the law, HBS accesses the investment appreciation
            within existing endowment accounts when the terms of the gift
            require funds to be withdrawn at a rate higher than the University's
            payout rate in any given year. Decapitalization of endowment
            income—or cash drawn from endowment appreciation—was a $1 million
            source of cash in fiscal 2021, compared with a $2 million source of
            cash in fiscal 2020.
          </p>
          <h2>Ending Balance, Unrestricted Reserves</h2>
          <p>
            Approximately 53 percent of the School's revenues in fiscal 2021
            came from HBP, Executive Education, and HBS Online—business units
            that are highly sensitive to the economy. Consequently, maintaining
            an ample balance of unrestricted reserves outside of the endowment
            is crucial to providing HBS with sufficient liquidity to finance
            ongoing campus renewal and expansion projects, and to capitalize on
            emerging strategic opportunities through economic cycles over the
            long term.
          </p>
          <p>
            Continuing its focus on generating strong cash from operating
            activities, HBS concluded fiscal 2021 with an unrestricted current
            use reserves balance of $211 million, compared with $174 million a
            year earlier. This level is substantially above the $100 million in
            unrestricted reserves established by HBS as the School's long-term
            liquidity management target.
          </p>
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
      subTitle: "Supplemental Financial Information",
      chartTitle: String,
      chartSubtitle: String,
      chartStats: Object,
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