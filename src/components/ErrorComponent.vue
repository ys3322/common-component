<template>
  <div class="ErrorComponent">
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "ErrorComponent",
  props: {},
  components: {},
  data() {
    return {
      msg: "找不到组件了...",
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
.ErrorComponent {
  background-color: #f1f1f1;
}
</style>
