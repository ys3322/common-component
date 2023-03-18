<template>
  <div class="dynamic-component">
    <!-- 左侧树 -->
    <div class="left-tree">
      <el-tree
        :data="treeData"
        empty-text="empty tree"
        node-key="key"
        :props="defaultProps"
        default-expand-all
        :expand-on-click-node="false"
        :current-node-key="currentNodeKey"
        @node-click="handleNodeClick"
        ref="tree"
        v-if="treeData.length"
      >
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span class="node-text">
            <!-- 根节点图标 -->
            <i class="icon icon-root" v-if="node.level === 1"></i>
            <!-- 非根节点 并且 有子集 -->
            <i
              class="icon icon-parent"
              v-else-if="node.level !== 1 && node.childNodes.length"
            ></i>
            <i
              class="icon icon-child"
              v-else-if="!node.childNodes.length && !node.isCurrent"
            ></i>
            <i
              class="icon icon-child-select"
              v-else-if="node.isCurrent && !node.childNodes.length"
            ></i>

            <span
              class="label"
              :class="{
                'label-bold1': node.level === 1,
                'label-bold2': node.level === 2,
              }"
              >{{ node.label }}</span
            >
          </span>
        </span>
      </el-tree>
    </div>

    <!-- 右侧动态组件 -->
    <div class="right-table">
      <component :is="dynamicComponent" v-bind="{ item }"></component>
    </div>
  </div>
</template>

<script>
import { getTreeData } from "../../api/test";
import Vue from "vue";

export default {
  name: "DynamicComponent",
  props: {},
  components: {},
  data() {
    return {
      treeData: [],
      // TODO:这里的属性作为 current-node-key的值，后续修改不生效。
      currentNodeKey: "",
      defaultProps: {
        children: "children",
        label: "title",
      },
      currentRouter: "",
      item: {},
    };
  },
  computed: {
    dynamicComponent() {
      if (this.currentRouter) {
        Vue.component("async-" + this.currentRouter, (resolve, reject) => {
          return import(
            `../../components/dynamicComponent/${this.currentRouter}.vue`
          );
        });
        return "async-" + this.currentRouter;
      }
      return null;
    },
  },
  watch: {
    treeData(item) {
      // 第一次数据加载成功，模拟点击第一个数据项
      this.handleNodeClick(item[0].children[0]);
      // el-tree中的 使用node-key指示 使用哪个属性值，作为每个节点的唯一标识
      // node-key="key"

      // ! 组件渲染之后，再设置currentNodeKey就没有选中的效果了
      // ! 组件在第一次初始化的时候，用到了current-node-key，后续再次设置无效！
      this.$nextTick(() => {
        // []!! 不知道为什么 默认选中 失效了。。
        // this.currentNodeKey = item[0].children[0].key;
        // this.$refs.tree.setCurrentKey(item[0].children[0].key);
        // console.log("yangs=> 2", item[0].children[0].key);
      });
    },
  },
  created() {
    this.initData();
  },
  mounted() {},
  methods: {
    async initData() {
      const [err, res] = await getTreeData();
      if (!err) {
        console.log("yangs=> data:1", res);
        this.currentNodeKey = res.data[0].children[0].key;
        this.treeData = res.data;
      }
    },

    handleNodeClick(item, node) {
      this.item = item;
      console.log("yangs=> handleNodeClick:", item.router, item);
      this.currentRouter = item.router;
    },
  },
};
</script>
<style scoped lang="scss">
// ! 错误引入scss文件代码  这种方式不会当成scss进行解析的！！！
// 是css语法，而不是scss语法
// @import url("./index.scss");

// scss文件导入
@import "./index.scss";
</style>
