import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ElementIcon } from '../../constants/element-icons.const';
import { MatIconModule } from '@angular/material/icon';
import { TreeStore } from '../../store/tree.store';

@Component({
  selector: 'app-redactor',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, MatIconModule, FormsModule],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedactorComponent {
  readonly icons = Object.values(ElementIcon);
  readonly iconNames = Object.keys(ElementIcon);

  readonly store = inject(TreeStore);
}
