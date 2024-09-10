import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeToolbarComponent } from "../tree-toolbar/tree-toolbar.component";
import { TreeContentComponent } from "../tree-content/tree-content.component";

@Component({
  selector: 'app-tree',
  standalone: true,
  imports: [TreeToolbarComponent, TreeContentComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeComponent {

}
