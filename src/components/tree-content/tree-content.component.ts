import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import type { TreeNode } from '../../types/tree-node.type';
import { TreeStore } from '../../store/tree.store';

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './tree-content.component.html',
  styleUrl: './tree-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeContentComponent {
  readonly store = inject(TreeStore);

  readonly childrenAccessor = (node: TreeNode): TreeNode[] => {
    return node.children ?? [];
  };

  readonly hasChildren = (_: number, node: TreeNode): boolean =>
    !!node.children;

  select(node: TreeNode): void {
    this.store.selectNode(node);
  }

  onExpandedChange(node: TreeNode, expanded: boolean): void {
    this.store.setExpansion(node, expanded);
  }
}
