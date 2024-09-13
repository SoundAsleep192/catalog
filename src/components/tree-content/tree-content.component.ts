import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CdkTree } from '@angular/cdk/tree';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';

import type { TreeNode } from '../../types/tree-node.type';
import { TreeStore } from '../../store/tree.store';
import { NodeType } from '../../constants/node-type.const';

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
  ],
  templateUrl: './tree-content.component.html',
  styleUrl: './tree-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeContentComponent {
  @ViewChild(CdkTree)
  tree!: CdkTree<TreeNode>;

  readonly store = inject(TreeStore);

  readonly trackBy = (_: number, node: TreeNode) => node.id;

  readonly expansionKey = (node: TreeNode) => node.id;

  readonly getChildren = (node: TreeNode): TreeNode[] => {
    if (!node.children) {
      return [];
    }

    return node.children.map(
      (childId) => this.store.treeNodeEntityMap()[childId]
    );
  };

  readonly hasChildren = (_: number, node: TreeNode): boolean =>
    !!node.children;

  select(node: TreeNode): void {
    this.store.selectNode(node);
  }

  drop(event: CdkDragDrop<TreeNode[], TreeNode[], TreeNode>): void {
    const droppedNode = event.item.data;

    const visibleNodes = this.getAllVisibleNodes();
    const targetNode = visibleNodes[event.currentIndex];

    if (targetNode.nodeType === NodeType.Folder) {
      this.store.removeNode(droppedNode);
      this.store.addNode(droppedNode, targetNode.id);
    }
  }

  private getAllVisibleNodes(): TreeNode[] {
    const result: TreeNode[] = [];

    const addExpandedChildren = (node: TreeNode) => {
      result.push(node);

      if (this.tree.isExpanded(node)) {
        const children = this.getChildren(node);
        children.forEach((child) => addExpandedChildren(child));
      }
    };

    this.store.roots().forEach((node) => {
      addExpandedChildren(node);
    });

    return result;
  }
}
