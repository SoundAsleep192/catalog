import {
  patchState,
  signalStore,
  type,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntity, updateEntity, withEntities } from '@ngrx/signals/entities';

import { multipleNodesAmount } from '../constants/multiple-nodes-amount.const';
import { NodeType } from '../constants/node-type.const';
import { generateRandomNodes } from '../functions/generate-random-nodes.function';

import type { TreeNode } from '../types/tree-node.type';
import { ElementIcon } from '../constants/element-icons.const';
import { computed } from '@angular/core';

const defaultParent: TreeNode = {
  id: '1',
  name: 'houses',
  nodeType: NodeType.Folder,
  children: [],
};

const defaultChildren: TreeNode[] = [
  {
    id: '2',
    name: 'big house',
    nodeType: NodeType.Element,
    icon: ElementIcon.Apartment,
  },
  {
    id: '3',
    name: 'small house',
    nodeType: NodeType.Element,
    icon: ElementIcon.Apartment,
  },
  {
    id: '4',
    name: 'palace',
    nodeType: NodeType.Element,
    icon: ElementIcon.Apartment,
  },
];

interface SelectedNodeIdState {
  selectedNodeId: string;
}

const initialState: SelectedNodeIdState = {
  selectedNodeId: '',
};

export const TreeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withEntities({ entity: type<TreeNode>(), collection: 'treeNode' }),
  withComputed(({ treeNodeEntityMap, treeNodeEntities, selectedNodeId }) => ({
    selectedNode: computed(() => treeNodeEntityMap()[selectedNodeId()]),
    roots: computed(() =>
      treeNodeEntities().filter((entity) => !entity.parentId)
    ),
  })),
  withMethods((store) => ({
    addNode(node: TreeNode, destinationId?: string): void {
      const insertedNode: TreeNode = { ...node, parentId: destinationId };

      patchState(store, addEntity(insertedNode, { collection: 'treeNode' }));

      if (!destinationId) {
        return;
      }

      patchState(
        store,
        updateEntity(
          {
            id: destinationId,
            changes: (entity) => ({
              children: entity.children
                ? [...entity.children, node.id]
                : undefined,
            }),
          },
          { collection: 'treeNode' }
        )
      );
    },
    updateNodeName({ id }: TreeNode, name: string): void {
      patchState(
        store,
        updateEntity({ id, changes: { name } }, { collection: 'treeNode' })
      );
    },
    updateNodeIcon({ id, nodeType }: TreeNode, icon: ElementIcon): void {
      if (nodeType === NodeType.Folder) {
        return;
      }

      patchState(
        store,
        updateEntity({ id, changes: { icon } }, { collection: 'treeNode' })
      );
    },
    selectNode(node: TreeNode): void {
      patchState(store, (state) => ({ ...state, selectedNodeId: node.id }));
    },
  })),
  withMethods((store) => ({
    insertRandomNodes(
      nodeType: NodeType,
      destinationId: string,
      amount = multipleNodesAmount
    ): void {
      const randomNodes: TreeNode[] = generateRandomNodes(nodeType, amount);
      randomNodes.forEach((randomNode) =>
        store.addNode(randomNode, destinationId)
      );
    },
  })),
  withHooks({
    onInit(store) {
      store.addNode(defaultParent);
      defaultChildren.forEach((childNode) =>
        store.addNode(childNode, defaultParent.id)
      );
    },
  })
);
