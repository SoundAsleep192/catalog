import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import type { TreeNode } from '../../types/tree-node.type';
import { TreeStore } from '../../store/tree.store';
import { CdkTree } from '@angular/cdk/tree';

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
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

  readonly childrenAccessor = (node: TreeNode): TreeNode[] => {
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
}
