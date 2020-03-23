<template>
  <div class="home">
    this is home
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
    };
  },
  created() {
    this.getData();
  },
  methods: {
    onClick(name, title) {
      document.getElementById(title).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    },
    async getData() {
      let data = await this.$get(
        'https://tianqiapi.com/api?version=epidemic&appid=31487225&appsecret=2Y6yjNKq',
      );
      this.$store.commit('setData', data);
    },
  },
};
</script>
<style lang="stylus" scoped></style>
