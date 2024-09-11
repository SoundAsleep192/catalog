import type { TreeNode } from './tree-node.type';

export interface TreeState {
  nodes: TreeNode[];
  selectedNodeId: string;
}
