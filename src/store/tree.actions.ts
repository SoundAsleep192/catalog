import { createAction, props } from '@ngrx/store';
import type { TreeNode } from '../types/tree-node.type';

export const insertFolder = createAction(
  '[Tree] Insert folder',
  props<{ destinationId: string; folder: TreeNode }>()
);

export const insertMultipleFolders = createAction(
  '[Tree] Insert multiple folders',
  props<{ destinationId: string; amount?: number }>()
);

export const insertElement = createAction(
  '[Tree] Insert element',
  props<{ destinationId: string; element: TreeNode }>()
);

export const insertMultipleElements = createAction(
  '[Tree] Insert multiple elements',
  props<{ destinationId: string; amount?: number }>()
);
