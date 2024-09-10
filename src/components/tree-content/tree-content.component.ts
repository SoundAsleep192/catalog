import { ChangeDetectionStrategy, Component } from '@angular/core';
import type { DisplayedTreeNode } from '../types/displayed-tree-node.type';
import { NodeType } from '../../constants/node-type.const';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [TreeNodeComponent],
  templateUrl: './tree-content.component.html',
  styleUrl: './tree-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeContentComponent {
  readonly displayedTreeNodes: DisplayedTreeNode[] = [
    {
      id: '1',
      name: 'houses',
      nodeType: NodeType.Folder,
      nestingLevel: 0,
    },
    {
      id: '2',
      name: 'big house',
      nodeType: NodeType.Element,
      nestingLevel: 1,
    },
    {
      id: '3',
      name: 'small house',
      nodeType: NodeType.Element,
      nestingLevel: 1,
    },
    {
      id: '4',
      name: 'palace',
      nodeType: NodeType.Element,
      nestingLevel: 1,
    },
  ];
}
