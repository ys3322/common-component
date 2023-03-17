<template>
  <div class="tree">
    <div class="left-tree">
      <el-tree
        :data="treeData"
        empty-text="empty tree"
        node-key="id"
        :props="defaultProps"
        default-expand-all
        highlight-current
        :default-expanded-keys="defaultShowNodes"
        :current-node-key="currentNode"
        expand-on-click-node
        check-on-click-node
        @node-click="handleNodeClick"
        ref="treeRef"
      >
        <!-- 利用作用域插槽，取出item项数据 -->
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span class="node-text" @click="handleNodeTextClick(node, data)">
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
  </div>
</template>
<script>
export default {
  name: "tree",
  props: {},
  components: {},
  data() {
    return {
      defaultProps: {
        // 指定节点标签为节点对象的某个属性值
        label: "label",
        // 指定子树为节点对象的某个属性值
        children: "children",
        // 指定(节点选择框)是否禁用为节点对象的某个属性值
        disabled: "disabled",
      },
      // 默认选中的节点
      currentNode: 0,
      // 默认展开的节点的 key 的数组
      defaultShowNodes: [],
    };
  },
  computed: {
    treeData() {
      const { guid } = this;
      let obj = {
        id: 0,
        label: "XXXXXXXX",
        children: [
          {
            // id: 1,
            id: guid(),
            label: "YY11",
            // disabled: true, // 是否禁用选择
            children: [
              {
                id: guid(),
                label: "编制( 0 )",
              },
              {
                id: guid(),
                label: "已发送 ( 0 )",
              },
            ],
          },
          {
            label: "YY22",
            id: guid(),
            children: [
              {
                id: guid(),
                label: "待审核( 0 )",
              },
              {
                id: guid(),
                label: "已审核( 0 )",
              },
              {
                id: guid(),
                label: "已驳回( 0 )",
              },
            ],
          },
          {
            label: "YY33",
            id: guid(),
            children: [
              {
                id: guid(),
                label: "待审核( 0 )",
              },
              {
                id: guid(),
                label: "已审核( 0 )",
              },
              {
                id: guid(),
                label: "已驳回( 0 )",
              },
            ],
          },
          {
            label: "YY44",
            id: guid(),
            children: [
              {
                id: guid(),
                label: "流转中( 0 )",
                children: [
                  {
                    id: guid(),
                    label: "检修工区发起( 0 )",
                  },
                  {
                    id: guid(),
                    label: "调度审核( 0 )",
                  },
                  {
                    id: guid(),
                    label: "运行工区审核( 0 )",
                  },
                ],
              },
              {
                id: guid(),
                label: "已归档( 0 )",
              },
              {
                id: guid(),
                label: "综合查询",
              },
            ],
          },
        ],
      };
      // const one = ["YY11", "YY22", "YY33", "YY44"];
      // const second = ["编制(0)", "已发送 ( 0 )", "已发送(0)"];
      // obj.children = one.map(item => {
      //   return {
      //     label: item,
      //     id: guid(),
      //     children: second.map(item => {
      //       return {
      //         label: item,
      //         id: guid(),
      //         children: [
      //           {
      //             id: guid(),
      //             label: '检修工区发起 (0)',
      //           },
      //           {
      //             id: guid(),
      //             label: '调度审核(0)',
      //           },
      //           {
      //             id: guid(),
      //             label: '运行工区审核 (0)',
      //           },
      //         ],
      //       };
      //     }),
      //   };
      // });
      return [obj];
    },
  },
  watch: {
    currentNode(currentNode) {
      console.log("yangs=> currentNode", currentNode);
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // 递归获取深层数组的 第一个子元素
      function getFirstChild(arr) {
        // 当前数组的第一项，如果children 没有子元素，就返回第一项
        if (!(arr[0].children && arr[0].children.length)) {
          return arr[0];
        } else {
          // 否则继续在第一项的children中查找！
          return getFirstChild(arr[0].children);
        }
      }
      console.log(getFirstChild(this.treeData));
      // 设置默认展开的节点
      this.defaultShowNodes.push(getFirstChild(this.treeData).id);
      // 设置默认选中的节点
      this.$refs.treeRef.setCurrentKey(getFirstChild(this.treeData).id);
      console.log("yangs=> ", this.defaultShowNodes);
    });
  },
  methods: {
    guid() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleNodeTextClick() {
      console.log("yangs=> handleNodeTextClick", Array.from(arguments));
    },
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
