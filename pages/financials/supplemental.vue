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
            In fiscal 2022, the School’s total revenues increased by $161
            million, or 20 percent, to $966 million from $805 million in the
            prior year, primarily reflecting the growth in Executive Education
            tuition revenue, MBA tuition and fees, and HBP. Following a year of
            entirely virtual programming, Executive Education returned to its
            traditional residential model in fiscal 2022, blending its in-person
            programming with virtual learning.
          </p>
          <div class="split nopad">
            <div class="left">
              <Chart
                chartTitle="Revenue"
                chartSubtitle="(in millions)"
                :chartStats="[
                  {
                    id: 'chart-01',
                    label: 'FY18',
                    total: '856',
                    top: '966',
                  },
                  {
                    id: 'chart-02',
                    label: 'FY19',
                    total: '925',
                    top: '966',
                  },
                  {
                    id: 'chart-03',
                    label: 'FY20',
                    total: '861',
                    top: '966',
                  },
                  {
                    id: 'chart-04',
                    label: 'FY21',
                    total: '805',
                    top: '966',
                  },
                  {
                    id: 'chart-05',
                    label: 'FY22',
                    total: '966',
                    top: '966',
                  },
                ]"
              />
            </div>

            <div class="right">
              <div class="chart-title">
                <p class="title">Revenue Components</p>
              </div>
              <ul class="tan-list">
                <li><span>31%</span> Publishing</li>
                <li><span>27%</span> Endowment Distribution &amp; Current</li>
                <li><span>14%</span> MBA Tuition &amp; Fees</li>
                <li><span>18%</span> Executive Education Tuition</li>
                <li><span>8%</span> HBS Online</li>
                <li><span>2%</span> Housing, Rents, &amp; Other</li>
              </ul>
            </div>
          </div>
          <div class="spacer_lg"></div>
          <h3>MBA Tuition and Fees</h3>
          <p>
            Student tuition and fee revenue from the MBA program increased 21
            percent to $137 million from $113 million in fiscal 2021. In that
            year, a number of students elected to take advantage of the School’s
            deferral and leave policies because of COVID, reducing enrollment by
            14 percent from fiscal 2020. By contrast, enrollment in fiscal 2022
            was around 1,870 students, in line with the School’s average
            enrollment between 2013 and 2020.
          </p>
          <p>
            First-year MBA tuition in fiscal 2022 was $73,440, flat with fiscal
            2021. Combined tuition and fees for fiscal 2022 were at the bottom
            of the peer business schools tracked by HBS and amounted to 14
            percent of the School’s total revenues.
          </p>
          <p>
            From an enrollment standpoint, the mix of first- and second-year MBA
            students was different in fiscal 2022 than in a typical year. From
            2015 through 2020, total enrollment averaged about 940 students per
            class. Because of the deferral and leave options, in fiscal 2021
            that number decreased to 729 first-year students and 880 second-year
            students. The School staggered the start of students who elected a
            deferral or leave of absence, allowing roughly half to enroll in
            fiscal 2022 and half in the current fiscal year. This resulted in
            fiscal 2022 enrollment of 1,013 first-year students and 857
            second-year students.
          </p>

          <h3>Harvard Business Publishing</h3>
          <p>
            HBP’s three market groups—Harvard Business Review Group, HBP
            Education, and Corporate Learning—each delivered year-over-year
            revenue growth in fiscal 2022. As a result, total Publishing revenue
            increased 10 percent from fiscal 2021 to $302 million.
          </p>
          <p>
            HBP international revenue continued its steady progress, increasing
            15 percent and representing 42 percent of the group’s total annual
            sales in fiscal 2022.
          </p>
          <p>
            Harvard Business Review provided subscribers with timely articles
            from its flagship magazine, website (hbr.org) and social media
            presence. In addition, HBR Press released a number books, podcasts,
            webinars, and HBR Live events. HBR Group sales increased 3 percent
            year-over-year, while paid circulation grew 1 percent to a record
            352,000 subscribers.
          </p>
          <p>
            HBP Education sales of course materials for participant-centered
            learning in business education increased 11 percent from fiscal
            2021. HBP Education provides course materials for online, hybrid and
            face-to-face applications with content that adds dynamic, real-life
            perspectives to undergraduate, MBA, and executive education
            programs.
          </p>
          <p>
            Revenue from Corporate Learning products and services increased 18
            percent from fiscal 2021. Corporate Learning partners with companies
            to co-create leadership development solutions that align with
            strategy and engage learners.
          </p>
          <p>
            Total HBP revenue amounted to 31 percent of the School’s total
            revenues in fiscal 2022, 3 percentage points lower than in fiscal
            2021.
          </p>
          <h3>Executive Education</h3>
          <p>
            Executive Education tuition increased by $93 million to $174 million
            in fiscal 2022 from $81 million in the prior year, reflecting the
            return of on-campus programming. The group produced 116 residential
            programs and 52 fully virtual programs for 10,575 participants.
          </p>
          <p>
            A combined 81 Topic-Focused and Comprehensive Leadership programs
            were designed and delivered for more than 6,300 global participants,
            representing an increase of 40 percent compared with fiscal 2021.
            The group also delivered custom programs in a range of industries,
            on-boarding 18 new clients into the portfolio and successfully
            navigating the return to on-campus programming, more than 80 percent
            of which was either entirely residential or blended.
            Internationally, the group launched new cohorts for its Senior
            Leadership Programs in India and the Middle East.
          </p>
          <p>
            Total Executive Education tuition revenue accounted for 18 percent
            of the School’s total revenues in fiscal 2022, compared with 10
            percent of total revenues in fiscal 2021.
          </p>
          <h3>HBS Online</h3>
          <p>
            Although HBS Online revenue declined 3 percent to $74 million in
            fiscal 2022 from $76 million a year earlier, the group performed
            well in the face of increased competition and higher learner
            acquisition costs.
          </p>
          <p>
            Total enrollment increased 5 percent to nearly 41,000, a compound
            annual growth rate of more than 67 percent since the group launched
            in fiscal 2014. Women comprised 42 percent of the total enrollment
            in fiscal 2022, while international students made up 55 percent.
          </p>
          <p>
            HBS Online expanded its course offerings with three new offerings:
            Design Thinking and Innovation, Power and Influence for Positive
            Impact, and Sustainable Investing.
          </p>
          <p>
            Total HBS Online revenue amounted to 8 percent of the School’s total
            revenues in fiscal 2022, compared with 9 percent for the prior year.
          </p>
          <div class="float-right">
            <Chart
              chartTitle="Cash Received From Gifts"
              chartSubtitle="(in millions)"
              :top="200"
              :chartStats="[
                {
                  id: 'chart-06',
                  label: 'FY18',
                  total: '186',
                  top: '190',
                },
                {
                  id: 'chart-07',
                  label: 'FY19',
                  total: '151',
                  top: '190',
                },
                {
                  id: 'chart-10',
                  label: 'FY20',
                  total: '121',
                  top: '190',
                },
                {
                  id: 'chart-11',
                  label: 'FY21',
                  total: '149',
                  top: '190',
                },
                {
                  id: 'chart-12',
                  label: 'FY22',
                  total: '151',
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
                  label: 'FY18',
                  total: '90',
                  top: '104',
                },
                {
                  id: 'chart-12',
                  label: 'FY19',
                  total: '104',
                  top: '104',
                },
                {
                  id: 'chart-13',
                  label: 'FY20',
                  total: '30',
                  top: '104',
                },
                {
                  id: 'chart-14',
                  label: 'FY21',
                  total: '26',
                  top: '104',
                },
                {
                  id: 'chart-15',
                  label: 'FY22',
                  total: '58',
                  top: '104',
                },
              ]"
            />
          </div>
          <p>
            Philanthropic revenue has long been vital to sustaining the School’s
            annual operations. In fiscal 2022, total revenue from the School’s
            three philanthropic sources—distribution from the endowment,
            unrestricted current use gifts, and restricted current use
            gifts—increased to $260 million from $244 million in fiscal 2021.
            This revenue amounted to 27 percent of the School’s total revenues,
            compared with 30 percent a year earlier. For the University as a
            whole, philanthropic revenue amounted to 45 percent of total
            operating revenues for fiscal 2022.
          </p>
          <p>
            The School’s annual endowment distribution for fiscal 2022 increased
            4 percent from the prior year to $191 million, amounting to 20
            percent of total revenue. In any given year, the change in the
            endowment distribution is governed by three factors: a specified
            rate increase set by the University, which in fiscal 2022 was 2.5
            percent; new gifts to the endowment, which consists of more than
            1,000 discrete funds established over the years by individual
            donors, corporations, and reunion classes; and cash transfers by the
            School to the endowment reserve. The School budgets the use of
            endowment distributions to support operations in accordance with the
            donors’ intentions and the terms of each gift.
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
            an endowment’s fundamental purpose of maintaining intergenerational
            equity.
          </p>
          <p>
            The University executes on this obligation in determining each
            year’s endowment payout rate—that is, the percentage of the
            endowment’s fair market value withdrawn and distributed annually for
            operations and for one-time or time-limited strategic purposes. This
            rate applies to HBS and to all schools at Harvard.
          </p>
          <div class="float-right">
            <div>
              <Chart
                chartTitle="Endowment Distribution"
                chartSubtitle="(in millions)"
                :chartStats="[
                  {
                    id: 'chart-21',
                    label: 'FY18',
                    total: '150',
                    top: '191',
                  },
                  {
                    id: 'chart-22',
                    label: 'FY19',
                    total: '162',
                    top: '191',
                  },
                  {
                    id: 'chart-23',
                    label: 'FY20',
                    total: '173',
                    top: '191',
                  },
                  {
                    id: 'chart-24',
                    label: 'FY21',
                    total: '184',
                    top: '191',
                  },
                  {
                    id: 'chart-25',
                    label: 'FY22',
                    total: '191',
                    top: '191',
                  },
                ]"
              />
            </div>
            <!--
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
            -->
          </div>
          <div class="spacer_lg"></div>
          <p>
            Consistent with the long-term goal of preserving the value of the
            endowment in real terms (after inflation) and generating a
            predictable stream of available income, the University’s targeted
            annual payout range is 5.0 to 5.5 percent of market value.
          </p>
          <p>
            The payout rate for fiscal 2022 was 4.2 percent, down 100 basis
            points from the prior year. The utilization of a payout formula
            means that the annual payout rate is generally lower following years
            of relatively high investment returns, as was the case in fiscal
            2022, and higher following years of lower investment returns.
            Adjustments can be made in succeeding years, keeping in mind the
            long-term payout goals of balancing budgetary stability with the
            preservation of the endowment’s purchasing power. Each year the
            Harvard Corporation approves the final distribution amount.
          </p>
          <p>
            Funds within the HBS endowment, along with those of the other
            Harvard schools, are managed by Harvard Management Company (HMC), a
            nonprofit, wholly owned subsidiary of the University. HMC has
            managed the Harvard endowment portfolio since 1974. Its mission is
            to ensure the University has the financial resources to confidently
            maintain and expand its leadership in education and research for
            future generations. The return on endowment assets for fiscal 2022,
            net of investment expenses and fees, was -1.8 percent, reflecting
            significant weakness in the equity and bond markets during the past
            year caused by persistent inflation and tightening monetary
            policies. Endowment returns for fiscal 2021 and 2020 were 33.6
            percent and 7.3 percent, respectively.
          </p>
          <p>
            The value of the University’s endowment declined to $50.9 billion at
            the end of fiscal 2022 from $53.2 billion at the end of the prior
            year. This value reflects investment returns, net of expenses and
            fees, as well as cash gifts to the endowment received during the
            year, net of the University’s annual distributions and
            decapitalizations.
          </p>
          <p>
            The fiscal 2022 year-end market value of the HBS endowment was $5.1
            billion as of June 30, 2022, compared with $5.3 billion a year
            earlier. The change reflected the negative return on the
            University’s endowment, less the School's annual distribution and
            decapitalizations, offset by endowment gifts received by HBS during
            the year and transfers to the School’s endowment reserve.
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
            HBS received gifts from more than 10,200 donors in fiscal 2022,
            including MBA, Doctoral, and Executive Education program alumni, as
            well as friends of the School.
          </p>
          <p>
            Total cash received from gifts in fiscal 2022, including new
            endowment gifts and gifts for capital construction projects,
            payments on prior years’ pledges, and restricted and unrestricted
            current use giving, was $151 million compared with $149 million in
            the prior year. Cash giving to the endowment decreased to $77
            million, from $80 million in fiscal 2021. Cash giving for capital
            projects totaled $5 million, compared with $8 million in the prior
            year.
          </p>
          <p>
            Current use giving—both restricted and unrestricted—provides crucial
            funding for innovation across the School. Because current use gifts
            can be spent immediately, they have a significant impact on the net
            operating surplus and, therefore, the School’s ability to capitalize
            on emerging strategic opportunities. For example, current use giving
            has enabled the School to enhance the Harvard Innovation Labs
            ecosystem, expand the reach of HBS Online, and broaden the faculty’s
            ambitious research agenda.
          </p>
          <p>
            Revenue from unrestricted current use gifts increased 10 percent to
            $45 million in fiscal 2022. Sustaining the HBS community’s
            remarkable commitment to unrestricted current use giving remains
            instrumental in achieving the mission of the School.
          </p>
          <p>
            Restricted current use giving typically varies from year to year in
            line with the School’s changing fundraising priorities and strategic
            needs. In fiscal 2022, revenue from these restricted gifts increased
            26 percent from a year earlier to $24 million.
          </p>
          <div class="float-right">
            <div class="chart-title">
              <p class="title">Endowment <span>(in millions)</span></p>
            </div>
            <ul class="tan-list two-col">
              <li class="bold"><span>FY 22</span> <span>$5,086</span></li>
              <li><span>FY 21</span> <span>5,265</span></li>
              <li><span>FY 20</span> <span>4,092</span></li>
              <li><span>FY 19</span> <span>3,985</span></li>
              <li><span>FY 18</span> <span>3,787</span></li>
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
            With more students on campus in fiscal 2022, total revenue from the
            Housing, Rents & Other category increased by $3 million from the
            prior year to $19 million. The School reported no interest income in
            fiscal 2022, compared with $1 million a year earlier. Total housing,
            rents, interest income & other revenue amounted to 2 percent of the
            School’s total revenues in fiscal 2022, consistent with the prior
            year.
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
                    label: 'FY18',
                    total: '766',
                    top: '908',
                  },
                  {
                    id: 'chart-27',
                    label: 'FY19',
                    total: '821',
                    top: '908',
                  },
                  {
                    id: 'chart-28',
                    label: 'FY20',
                    total: '831',
                    top: '908',
                  },
                  {
                    id: 'chart-29',
                    label: 'FY21',
                    total: '779',
                    top: '908',
                  },
                  {
                    id: 'chart-30',
                    label: 'FY22',
                    total: '908',
                    top: '908',
                  },
                ]"
              />
            </div>
            <div class="right">
              <div class="chart-title">
                <p class="title">Expenses Components</p>
              </div>
              <ul class="tan-list">
                <li><span>47%</span> Salaries &amp; Benefits</li>
                <li><span>14%</span> Supplies &amp; Equipment</li>
                <li><span>10%</span> Publishing &amp; Printing</li>
                <li><span>8%</span> Space &amp; Occupancy</li>
                <li><span>6%</span> Fellowships</li>
                <li><span>6%</span> Professional Services</li>
                <li><span>5%</span> Depreciation</li>
                <li><span>3%</span> University Assessments</li>
                <li><span>&lt;1%</span> Debt Service</li>
                <li><span>&lt;1%</span> Other</li>
              </ul>
            </div>
          </div>
          <div class="spacer_lg"></div>
          <p>
            Faculty research expenses include a portion of faculty salaries and
            benefits expense, as well as direct costs for faculty support staff
            and travel, and for the School’s network of global offices.
            Additionally, HBS allocates a portion of the costs associated with
            library resources, campus facilities, technology, and administration
            to this category. Faculty research expenses totaled $140 million in
            fiscal 2022, comprising 15 percent of the School’s operating budget.
          </p>
          <p>
            Although HBS characterizes costs charged to HBP, HBS Online, and
            Executive Education as operating expenses, in a profit-seeking
            enterprise they would in large part be considered cost of goods
            sold. These expenses include direct costs for staff compensation,
            specialized outside professional services in Information Technology
            and other functional areas, marketing costs, and residence expenses
            for Executive Education program participants.
          </p>
          <p>
            Total operating expenses for fiscal 2022 were $908 million, an
            increase of $129 million, or 17 percent, from $779 million for
            fiscal 2021. The increase was primarily attributable to other
            expense and salaries and benefits.
          </p>
          <h2>Salaries &amp; Benefits</h2>
          <p>
            Compensation for faculty and staff is the largest expense at HBS.
            The School’s salaries and benefits expense for fiscal 2022 increased
            11 percent to $428 million from $386 million in fiscal 2021. This
            represented 47 percent of the School’s total operating costs,
            compared with 50 percent in the prior year. The change in salaries
            and benefits was attributable to both an increase in full-time
            equivalent (FTE) faculty and staff and rate increases.
          </p>
          <p>
            Expanding the size and diversity of the faculty is a strategic
            priority for the School. These efforts enhance the strength of our
            MBA and Doctoral Programs; fuel the growth of HBP, Executive
            Education, and HBSO; and expand our ability to conduct innovative
            research. In fiscal 2022, six candidates accepted Assistant
            Professor positions, and two faculty members were promoted to
            associate or tenured positions. The total number of faculty, as
            measured in full-time equivalent (FTE), can rise or fall in any
            given year reflecting retirements, departures, and fluctuations in
            recruiting activity. Net of retirements and departures, the size of
            the HBS faculty increased to 272 FTEs in fiscal 2022, from 256 FTEs
            a year earlier.
          </p>
          <p>
            The School’s staff grew to a budgeted 1,325 FTEs in fiscal 2022,
            from 1,289 in the prior year.
          </p>
          <p>
            To capitalize on new opportunities, the School invested to expand
            the faculty, increase Information Technology staffing to accommodate
            the growth in virtual and hybrid learning, and grow HBS Online. The
            increase in IT staffing also reflects the School’s continuing
            investments to further strengthen the security of the School’s data
            infrastructure.
          </p>
          <h2>Fellowships</h2>
          <p>
            The School categorizes fellowships, or financial aid, as an expense
            line item on the Statement of Activity and Cash Flows. Making
            education at HBS affordable to a broad cross section of applicants,
            regardless of their financial circumstances, is a long-standing goal
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
            their debt at graduation by ensuring that fellowship support more
            than keeps pace with tuition and fees.
          </p>
          <p>
            Total fellowships expense for fiscal 2022, including assistance for
            MBA students, Doctoral candidates, and a limited number of Executive
            Education participants, increased by $4 million, or 8 percent, from
            fiscal 2021 to $57 million. The increase in fellowships reflected
            the increase in student enrollment. Fellowships amounted to 6
            percent of the School’s total operating costs in fiscal 2022, down
            one point from the prior year.
          </p>
          <p>
            Approximately half of the School’s MBA students currently receive
            fellowships, which cover an average of more than 50 percent of a
            student’s total tuition. About 26 percent of total tuition—more than
            $35 million—was awarded as fellowships in fiscal 2022.
          </p>
          <p>
            Average fellowship support per student totaled nearly $44,000 in
            fiscal 2022 and was up 2 percent from the prior year. Over the past
            five fiscal years, the School’s average two-year MBA fellowship
            award has grown from more than $75,000 for the class of 2018 to
            $86,000 for the class of 2023.
          </p>
          <p>
            Funding for fellowships comes from restricted endowment and current
            use giving by HBS alumni and friends. These funds are supplemented
            by unrestricted funds as necessary, which totaled $1.2 million in
            fiscal 2022.
          </p>
          <h2>Publishing &amp; Printing</h2>
          <p>
            This expense category includes a portion of HBP’s production costs
            plus a small amount of spending related to the School’s printed
            materials and publications. The production costs include, for
            example, Harvard Business Review’s printing expense. They also
            include strategic investments in digital infrastructure and content
            designed to extend the group’s record of consistent growth at a time
            of significant change in the way information is consumed.
          </p>
          <p>
            Publishing and printing expenses for fiscal 2022 increased by $11
            million, or 14 percent, from the prior year to $89 million,
            reflecting the growth of HBP. Printing and publishing accounted for
            10 percent total operating costs, consistent with the prior year.
          </p>
          <h2>Space &amp; Occupancy</h2>
          <p>
            The HBS campus includes 36 buildings encompassing 2 million square
            feet. Space and occupancy expenses include costs related to
            maintaining and operating the School’s buildings and campus
            infrastructure. Additionally, facilities improvement and renovation
            costs that do not qualify as capital expenses are generally included
            in this category.
          </p>
          <p>
            Also included are expenses related to dining facilities and other
            campus services; costs associated with leased space for HBP, HBS
            Online, and the School’s global offices; as well as residence costs
            for Executive Education program participants.
          </p>
          <p>
            With MBA enrollment returning to its historical average in fiscal
            2022, the School’s space and occupancy expenses increased by $9
            million, or 14 percent, from the prior year to $73 million. Space
            and occupancy expense accounted for 8 percent of the School’s total
            operating costs in fiscal 2022, consistent with the prior year.
          </p>
          <h2>Professional Services</h2>
          <p>
            A large portion of the School’s professional services expense is
            related to spending that a for-profit business would categorize as
            cost of goods sold.
          </p>
          <p>
            For fiscal year 2022, professional services expenses increased $7
            million, or 15 percent, from the prior year to $53 million. This
            result primarily reflected the resumption of on-campus activities in
            fiscal 2022 and the need for professional services to support the
            School’s larger revenue base.
          </p>
          <p>
            IT spending represented 11 percent of the School’s total operating
            expenses in fiscal 2022. Controlling IT costs is an important
            financial priority for the School, and toward that end HBS has begun
            to shift toward software-as-a-service platforms rather than
            custom-developed applications. The School also is moving toward
            greater use of third-party IT service providers and transitioning IT
            applications to the cloud.
          </p>
          <h2>Supplies &amp; Equipment &amp; Other Expenses</h2>
          <p>
            Supplies and equipment expenses for fiscal 2022 were $10 million, or
            1 percent of the School’s total operating costs, consistent with the
            prior year. In the other expense category, fiscal 2022 spending was
            $124 million, up approximately 70 percent from the prior year. This
            amounted to 14 percent of the School’s total operating costs versus
            9 percent in fiscal 2021. The increase of on-campus activity with
            the fading of COVID-19 resulted in a significant rise in the other
            expenses line. The largest expense increases occurred in areas such
            as catering, travel, and advertising.
          </p>
          <h2>Debt Service</h2>
          <p>
            HBS finances major capital projects with a mix of three sources of
            funding: gifts, unrestricted reserves of internally generated cash,
            and the strategic use of debt financed through the University.
          </p>
          <p>
            The HBS balance sheet historically has been only modestly leveraged,
            and debt leverage remained low in fiscal 2022. HBS paid down $5
            million in building debt in fiscal 2022, compared with $7 million in
            the prior year. The School’s year-end fiscal 2022 building
            debt-to-net asset ratio was 0.5 percent, unchanged from the prior
            year. Other University debt increased by $4 million to $83 million.
          </p>
          <p>
            The School’s debt service expense consists of interest payments to
            the University and is covered by using cash from operations. Fiscal
            2022 debt service expense remained at $2 million. As in fiscal 2021,
            this expense was mainly associated with borrowings to finance prior
            years’ campus expansion. Consistent with the four prior years, the
            interest portion of the School’s debt service amounted to less than
            1 percent of total operating costs in fiscal 2022.
          </p>
          <h2>University Assessments</h2>
          <p>
            The University Assessments expense encompasses services provided to
            HBS by Harvard University, including payroll and benefits
            administration, processing of accounts receivable and payable, and
            legal services. The amount charged to HBS in any given year is
            primarily calculated as a percentage of the School’s total expenses.
            The School’s expense for these assessments increased $6 million to
            $27 million, or 3 percent of total operating costs. Of the total
            increase, approximately $5 million represented the reinstatement of
            an assessment waived by the University in fiscal 2021 in response to
            the challenging economic environment. The other $1 million
            represented regular annual increases in the assessments.
          </p>
          <h2>Depreciation</h2>
          <p>
            The School computes depreciation using the straight-line method over
            the estimated useful lives of the assets. The depreciation expense
            for fiscal 2022 decreased by $1 million, or 2.2 percent, from the
            prior year to $45 million. The School’s depreciation expense for
            fiscal 2022 amounted to 5 percent of total operating costs, compared
            with 6 percent a year earlier.
          </p>

          <h2>Cash Before Capital Activites</h2>
          <p>
            The School’s cash operations totaled $58 million in fiscal 2022,
            compared with $26 million in fiscal 2021, reflecting the School’s
            ability to increase revenue faster than expenses. As in fiscal 2021,
            this cash was largely generated by margin contributions from the
            School’s competitive business units—HBP, Executive Education, and
            HBS Online—as well as generous giving to the School by alumni and
            friends of HBS. In addition, depreciation is a non-cash item that
            added back $45 million to the School’s cash flow in fiscal 2022,
            compared with $46 million in the prior year
          </p>
          <h2>Net Capital Expenses</h2>
          <p>
            Given continued uncertainty about the pandemic heading into fiscal
            2022, capital spending was limited to select projects. These
            included the renovations of Cash House and Cumnock Hall as well as
            construction at 114 Western Avenue for new leased co-working office
            space. Total capital expenses for fiscal 2022 increased to $43
            million from $22 million in the prior year. The School’s net capital
            expenses for fiscal 2022 totaled $28 million, down $2 million from
            the prior year.
          </p>
          <h2>Changes in Debt &amp; Other</h2>
          <p>
            The School’s debt and other cash activities decreased by $64 million
            in fiscal 2022, compared with a decrease of $5 million in the prior
            year. The change in debt and other cash activities primarily related
            a transfer to the HBS endowment of $65 million in unrestricted cash,
            made possible by the School’s operating surplus, to fund future
            capital needs.
          </p>
          <p>
            Because gifts, internally generated cash, and unrestricted reserves
            have been available and sufficient to finance capital activities,
            fiscal 2022 marked the School’s 14th consecutive year with no new
            borrowings. Debt principal payments were $6 million in fiscal 2022
            compared with $7 million a year earlier.
          </p>
          <p>
            Capitalization of endowment income—or cash used to purchase
            endowment units—was a $5 million use of cash in fiscal 2022, down $1
            million from the prior year. In compliance with federal and state
            legal requirements, the School’s objective is to spend as much of
            the endowment distribution as possible in any given year, according
            to the terms of each gift. Funds unspent as a result of gift
            restrictions are generally reinvested in the endowment.
          </p>
          <p>
            In compliance with the law, HBS accesses the investment appreciation
            within existing endowment accounts when the terms of the gift
            require funds to be withdrawn at a rate higher than the University’s
            payout rate in any given year. Decapitalization of endowment
            income—or cash drawn from endowment appreciation—was a $4 million
            source of cash in fiscal 2022, compared with a $1 million source of
            cash in fiscal 2021.
          </p>
          <h2>Ending Balance, Unrestricted Reserves</h2>
          <p>
            Approximately 57 percent of the School’s revenues in fiscal 2022
            came from HBP, Executive Education, and HBS Online—business units
            that are sensitive to fluctuations in the economy. Consequently,
            maintaining an ample balance of unrestricted reserves outside of the
            endowment is crucial to providing HBS with sufficient liquidity to
            finance ongoing campus renewal and expansion projects and to
            capitalize on emerging strategic opportunities through economic
            cycles over the long term.
          </p>
          <p>
            Continuing its focus on generating strong cash from operating
            activities, HBS concluded fiscal 2022 with an unrestricted current
            use reserves balance of $227 million, compared with $211 million a
            year earlier. This level is substantially above the required level
            of unrestricted reserves for liquidity management purposes.
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
