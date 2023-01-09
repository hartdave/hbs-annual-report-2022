<template>
  <div>
    <div id="banner">
      <TheMenu :main="main" :isPage="isPage" :title="title" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      main: false,
      isPage: false,
      title: null,
    };
  },
};
</script>