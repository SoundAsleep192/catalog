import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-tree-toolbar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltip],
  templateUrl: './tree-toolbar.component.html',
  styleUrl: './tree-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeToolbarComponent {}
