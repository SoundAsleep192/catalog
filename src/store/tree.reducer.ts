import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './tree.actions';
import type { TreeNode } from '../components/types/tree-node.type';

export const initialState: TreeNode[] = [];

export const treeReducer = createReducer(
  initialState,
  on(increment, (state) => state),
  on(decrement, (state) => state),
  on(reset, (state) => state)
);
