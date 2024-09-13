import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { TreeStore } from '../../store/tree.store';
import { NodeType } from '../../constants/node-type.const';

@Component({
  selector: 'app-tree-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './tree-toolbar.component.html',
  styleUrl: './tree-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeToolbarComponent {
  readonly store = inject(TreeStore);

  insertElements(): void {
    const selectedNodeId = this.store.selectedNodeId();

    this.store.addRandomNodes(NodeType.Element, selectedNodeId);
  }

  insertFolders(): void {
    const selectedNodeId = this.store.selectedNodeId();

    this.store.addRandomNodes(NodeType.Folder, selectedNodeId);
  }
}
