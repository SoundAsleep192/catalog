import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { TreeStore } from '../../store/tree.store';

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
    this.store.insertMultipleElements(this.store.selectedNodeId());
  }

  insertFolders(): void {
    this.store.insertMultipleFolders(this.store.selectedNodeId());
  }
}
