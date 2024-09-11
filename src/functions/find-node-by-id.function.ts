import type { TreeNode } from '../types/tree-node.type';

export function findNodeById(nodes: TreeNode[], id: string): TreeNode | null {
  const queue: TreeNode[] = [...nodes];

  let nextNode = queue.pop();

  while (nextNode) {
    if (nextNode.id === id) {
      return nextNode;
    }

    if (nextNode.children) {
      queue.unshift(...nextNode.children);
    }

    nextNode = queue.pop();
  }

  return null;
}
