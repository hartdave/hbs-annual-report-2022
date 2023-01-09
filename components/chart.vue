<template>
  <div>
    <div class="chart">
      <div class="chart-title">
        <p class="title">
          {{ chartTitle }} <span>{{ chartSubtitle }}</span>
        </p>
      </div>
      <ul class="chart__list">
        <li class="chart__item" v-for="stat in chartStats" :key="stat.id">
          <span
            class="chart__item-total"
            :chart-total="stat.total"
            :chart-top="stat.top"
          ></span>
          <span class="chart__item-total_caption" :chart-total="stat.total">{{
            stat.total
          }}</span>
          <span class="chart__item-label">{{ stat.label }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: ["chartTitle", "chartSubtitle", "chartStats", "top"],
  data() {
    return {};
  },
  mounted() {
    var windowHeight = window.innerHeight - 100,
      scrollElementArray = document.querySelectorAll(".chart");
    window.onscroll = function () {
      scrollElementArray.forEach((el) => {
        if (el.getBoundingClientRect().top <= windowHeight) {
          el.classList.add("scroll-element-active");
          var rowItems = Array.from(
              el.getElementsByClassName("chart__item-total")
            ),
            totalItems = Array.from(
              el.getElementsByClassName("chart__item-total_caption")
            );
          for (let i = 0; i < rowItems.length; i++) {
            let rowHeight = rowItems[i].getAttribute("chart-total"),
              chartTop = rowItems[i].getAttribute("chart-top"),
              percentage = ((rowHeight * 100) / chartTop - 5).toFixed(1) + "%";
            (function (index) {
              setTimeout(function () {
                rowItems[i].style.height = percentage;
              }, i * 100);
              setTimeout(function () {
                totalItems[i].style.top =
                  100 - ((rowHeight * 100) / chartTop - 5).toFixed(1) + "%";
                totalItems[i].style.opacity = 1;
              }, i * 150);
            })(i);
          }
        }
      });
    };
  },
};
</script>