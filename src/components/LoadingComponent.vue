<template>
  <div class="LoadingComponent">
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "LoadingComponent",
  props: {},
  components: {},
  data() {
    return {
      msg: "奋力加载中...",
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
.LoadingComponent {
  background-color: #f1f1f1;
}
</style>
