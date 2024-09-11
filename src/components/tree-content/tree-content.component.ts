import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { NodeType } from '../../constants/node-type.const';
import type { TreeNode } from '../../types/tree-node.type';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const treeData: TreeNode[] = [
  {
    id: '1',
    name: 'houses',
    nodeType: NodeType.Folder,
    children: [
      {
        id: '2',
        name: 'big house',
        nodeType: NodeType.Element,
      },
      {
        id: '3',
        name: 'small house',
        nodeType: NodeType.Element,
      },
      {
        id: '4',
        name: 'palace',
        nodeType: NodeType.Element,
      },
    ],
  },
];

type FlatNode = TreeNode & { isExpanded: boolean };

@Component({
  selector: 'app-tree-content',
  standalone: true,
  imports: [MatTreeModule, MatIconModule, MatButtonModule],
  templateUrl: './tree-content.component.html',
  styleUrl: './tree-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeContentComponent {
  dataSource: FlatNode[] = treeData.map((node) => ({
    ...node,
    isExpanded: false,
  }));

  selectedNodeId = '';

  childrenAccessor = (node: TreeNode): TreeNode[] => {
    return node.children ?? [];
  };

  hasChildren = (_: number, node: TreeNode): boolean => !!node.children;

  isSelected = (node: TreeNode): boolean => node.id === this.selectedNodeId;

  select(node: TreeNode): void {
    this.selectedNodeId = node.id;
  }

  onExpandedChange(node: FlatNode, expanded: boolean): void {
    node.isExpanded = expanded;
  }
}
