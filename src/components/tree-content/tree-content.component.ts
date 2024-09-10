import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { TreeNode } from '../types/tree-node.type';

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [],
  templateUrl: './tree-content.component.html',
  styleUrl: './tree-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeContentComponent {
  readonly displayedTreeNodes: TreeNode[] = []
}
