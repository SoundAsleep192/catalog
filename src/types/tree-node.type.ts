import type { NodeType } from '../constants/node-type.const';

export type TreeNode = {
  id: string;
  name: string;
  nodeType: NodeType;
  isExpanded?: boolean;
  children?: TreeNode[];
};
