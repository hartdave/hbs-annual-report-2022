<template>
  <div id="top">
    <div id="page-top">
      <TheMenu :main="main" :isPage="isPage" :title="title" />
    </div>
    <main id="maincontent">
      <article class="container d-grid">
        <img
          src="~/assets/img/datar_560x704.png"
          title="Letter from the Dean"
          alt="Photo of Dean Srikant Datar"
        />
        <div class="content">
          <p class="snap">
            When people ask me about the impact of the global pandemic on
            Harvard Business School (HBS), I tell them that it has been the
            gateway to our future. This may sound counterintuitive, but rather
            than grinding us to halt, the pandemic required us to find new ways
            to achieve our mission of educating leaders who make a difference in
            the world. It propelled us into a future full of possibilities we
            otherwise might never have imagined. Over the past year, our vision
            for that future has crystallized in the form of exciting new
            initiatives that have the potential to reshape management practice
            and the very role of business in society.
          </p>
          <p class="snap">
            We began the academic year focused on welcoming our entire community
            back to campus. The vagaries of COVID-19 notwithstanding, we were
            determined to restore the vibrancy and dynamism of our campus while
            building on the knowledge and skills we had gained in hybrid
            learning and remote work. Our new normal will be to take what we’ve
            always done well—teaching and research—and infuse it with new tools
            and platforms to extend our reach and accelerate our impact.
          </p>
          <p class="snap">
            To achieve this vision, we must embrace digitalization to a much
            greater extent. The digital transformation effort we launched is
            exploring how we can use data and technology to fundamentally
            rethink aspects of our organization and activities. It’s a long-term
            goal but we are already pursuing three opportunities that could
            yield near-term results, including lifelong learning for alumni,
            supporting a digital research infrastructure, and expanding the
            reach and impact of our ideas, courses and cases.
          </p>
          <p class="snap">
            Just as we are focused on digital transformation, it’s clear that
            digital technologies and data science, including artificial
            intelligence and machine learning, are disrupting operations and
            business models around the world. The Digital, Data and Design
            Institute at Harvard (D^3) launched last year provides HBS and other
            schools in the University with a powerful foundation for
            accelerating research on big, multidisciplinary problems. Several
            teams of faculty have already launched labs, each pursuing insights
            to large, complex problems. Their work will position us as a global
            leader in reshaping the landscape of the digital-first world and the
            role of business in that transformation.
          </p>
          <p class="snap">
            Another major development for the School has been the announcement
            of the Institute for the Study of Business in Global Society (BiGS).
            Business has long been an engine for prosperity in the world, but
            more is needed (and expected) if we are to address challenges like
            economic inequality, racial equity, or climate change. We are
            excited to deepen, accelerate, and amplify the work we do in this
            arena through research, teaching, convening, and dissemination.
          </p>
          <p class="snap">
            As you’ll see in this report, these major new undertakings are
            becoming interwoven in the day-to-day work of the School. Our
            ambition to bring groundbreaking management insights into the
            classroom has never been greater and we continue to do the demanding
            work of improving equity and inclusion for all members of our
            community, which is so critical to our collective success.
          </p>
          <p class="snap">
            I look forward to sharing further updates with you in the year
            ahead.
          </p>

          <img
            src="~/assets/img/datar_sig_blue_760px.png"
            title="Srikant Datar"
            alt="Signature of Dean Srikant Datar"
            width="376"
            height="74"
            class="signature"
          />
          <p class="signature">
            <a
              href="https://www.hbs.edu/about/leadership/Pages/dean-srikant-datar.aspx"
              >Srikant Datar</a
            ><br />
            <i>Dean of the Faculty</i>
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
      title: "From The Dean",
    };
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        class: "page",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
