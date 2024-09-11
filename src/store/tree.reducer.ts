import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import {
  insertElement,
  insertFolder,
  insertMultipleElements,
  insertMultipleFolders,
} from './tree.actions';
import type { TreeNode } from '../types/tree-node.type';
import { NodeType } from '../constants/node-type.const';
import { multipleNodesAmount } from '../constants/multiple-nodes-amount.const';
import { findNodeById } from '../functions/find-node-by-id.function';
import { generateRandomNodes } from '../functions/generate-random-nodes.function';

export const initialState: TreeNode = {
  id: '1',
  name: 'root',
  nodeType: NodeType.Folder,
  children: [],
};

export const treeReducer = createReducer(
  initialState,
  on(insertElement, (state, { destinationId, element }) => {
    const nextState = produce(state, (draft) => {
      const destinationNode = findNodeById(draft, destinationId);

      if (destinationNode === null) {
        return;
      }

      destinationNode.children.push(element);
    });

    return nextState;
  }),
  on(insertFolder, (state, { destinationId, folder }) => {
    const nextState = produce(state, (draft) => {
      const destinationNode = findNodeById(draft, destinationId);

      if (destinationNode === null) {
        return;
      }

      destinationNode.children.push(folder);
    });

    return nextState;
  }),
  on(
    insertMultipleElements,
    (state, { destinationId, amount = multipleNodesAmount }) => {
      const nextState = produce(state, (draft) => {
        const destinationNode = findNodeById(draft, destinationId);

        if (destinationNode === null) {
          return;
        }

        const randomElements = generateRandomNodes(NodeType.Element, amount);
        destinationNode.children.push(...randomElements);
      });

      return nextState;
    }
  ),
  on(
    insertMultipleFolders,
    (state, { destinationId, amount = multipleNodesAmount }) => {
      const nextState = produce(state, (draft) => {
        const destinationNode = findNodeById(draft, destinationId);

        if (destinationNode === null) {
          return;
        }

        const randomFolders = generateRandomNodes(NodeType.Folder, amount);
        destinationNode.children.push(...randomFolders);
      });

      return nextState;
    }
  )
);
