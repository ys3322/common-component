<template>
  <div class="home">
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "home",
  props: {},
  components: {},
  data() {
    return {
      msg: 123,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.home {
  background-color: aliceblue;
}
</style>
