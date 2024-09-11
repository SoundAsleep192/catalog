import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import type { DisplayedTreeNode } from '../../types/displayed-tree-node.type';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [JsonPipe, MatIconModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeNodeComponent {
  readonly node = input.required<DisplayedTreeNode>();
}
