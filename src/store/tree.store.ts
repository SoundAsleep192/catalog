import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { produce } from 'immer';

import { findNodeById } from '../functions/find-node-by-id.function';
import { multipleNodesAmount } from '../constants/multiple-nodes-amount.const';
import { NodeType } from '../constants/node-type.const';
import { generateRandomNodes } from '../functions/generate-random-nodes.function';

import type { TreeState } from '../types/tree-state.type';
import type { TreeNode } from '../types/tree-node.type';

const initialState: TreeState = {
  nodes: [],
  selectedNodeId: '',
};

export const TreeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    insertElement(destinationId: string, element: TreeNode): void {
      patchState(store, (state) => {
        const nodes = produce(state.nodes, (draft) => {
          const destinationNode = findNodeById(draft, destinationId);

          if (!destinationNode?.children) {
            return;
          }

          destinationNode.children.push(element);
        });

        return { ...state, nodes };
      });
    },
    insertMultipleElements(
      destinationId: string,
      amount = multipleNodesAmount
    ): void {
      patchState(store, (state) => {
        const nodes = produce(state.nodes, (draft) => {
          const destinationNode = findNodeById(draft, destinationId);

          if (!destinationNode?.children) {
            return;
          }

          const randomElements = generateRandomNodes(NodeType.Element, amount);
          destinationNode.children.push(...randomElements);
        });

        return { ...state, nodes };
      });
    },
    insertFolder(destinationId: string, folder: TreeNode): void {
      patchState(store, (state) => {
        const nodes = produce(state.nodes, (draft) => {
          const destinationNode = findNodeById(draft, destinationId);

          if (!destinationNode?.children) {
            return;
          }

          destinationNode.children.push(folder);
        });

        return { ...state, nodes };
      });
    },
    insertMultipleFolders(
      destinationId: string,
      amount = multipleNodesAmount
    ): void {
      patchState(store, (state) => {
        const nodes = produce(state.nodes, (draft) => {
          const destinationNode = findNodeById(draft, destinationId);

          if (!destinationNode?.children) {
            return;
          }

          const randomFolders = generateRandomNodes(NodeType.Folder, amount);
          destinationNode.children.push(...randomFolders);
        });

        return { ...state, nodes };
      });
    },
    selectNode(node: TreeNode): void {
      patchState(store, (state) => ({ ...state, selectedNodeId: node.id }));
    },
  }))
);
