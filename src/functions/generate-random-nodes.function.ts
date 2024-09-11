import type { NodeType } from '../constants/node-type.const';
import type { TreeNode } from '../types/tree-node.type';

export function generateRandomNodes(
  nodeType: NodeType,
  amount: number
): TreeNode[] {
  const randomElements: TreeNode[] = [];

  for (let i = 0; i < amount; i++) {
    const randomElement: TreeNode = {
      id: crypto.randomUUID(),
      name: Math.random().toString(36).substring(2, 5),
      nodeType,
      children: [],
    };

    randomElements.push(randomElement);
  }

  return randomElements;
}
