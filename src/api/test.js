import { tree1 } from "./data/tree1";

export function getTreeData() {
  return new Promise((res) => {
    setTimeout(() => {
      res([null, tree1]);
    }, 200);
  });
}
