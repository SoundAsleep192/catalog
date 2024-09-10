import type { NodeType } from "../../constants/node-type.const"

export type DisplayedTreeNode = {
  id: string,
  name: string,
  nodeType: NodeType,
  nestingLevel: number
}
