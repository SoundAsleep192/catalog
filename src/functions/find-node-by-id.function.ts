import type { TreeNode } from '../types/tree-node.type';

export function findNodeById(node: TreeNode, id: string): TreeNode | null {
  if (node.id === id) {
    return node;
  }

  let result: TreeNode | null = null;

  for (const childNode of node.children) {
    result = findNodeById(childNode, id);

    if (result !== null) {
      return result;
    }
  }

  return result;
}
