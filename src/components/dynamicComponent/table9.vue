<template>
  <div class="table">
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "Table9",
  props: {
    item: Object,
  },
  components: {},
  data() {
    return {
      msg: "table9",
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("yangs=> table:item", this.item);
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.table {
  background-color: #ccc;
}
</style>
