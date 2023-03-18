<template>
  <div class="table">
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "Table7",
  props: {
    item: Object,
  },
  components: {},
  data() {
    return {
      msg: "table7",
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
