import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-tree-toolbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './tree-toolbar.component.html',
  styleUrl: './tree-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeToolbarComponent {

}
