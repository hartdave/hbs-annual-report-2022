export default {
  target: "static",
  head: {
    titleTemplate: "HBS" + " - %s",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  loading: false,
  css: ["@@/assets/main.scss"],
  components: true,
  buildModules: ["nuxt-webpack-optimisations"],
  // modules: ["nuxt-lazy-load"],
  styleResources: {
    scss: ["./assets/variables.scss"],
  },
  router: {
    base: "/about/annualreport/2022/",
  },
};
