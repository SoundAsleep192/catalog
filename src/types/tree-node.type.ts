import type { ElementIcon } from '../constants/element-icons.const';
import type { NodeType } from '../constants/node-type.const';

export type TreeNode = {
  id: string;
  name: string;
  nodeType: NodeType;
  icon?: ElementIcon;
  parentId?: string;
  children?: string[];
};
