import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule, ReactiveFormsModule, type NgModel } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ElementIcon } from '../../constants/element-icons.const';
import { MatIconModule } from '@angular/material/icon';
import { TreeStore } from '../../store/tree.store';

@Component({
  selector: 'app-redactor',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedactorComponent {
  @ViewChild('name') nameInput!: NgModel;

  readonly icons = Object.values(ElementIcon);
  readonly iconNames = Object.keys(ElementIcon);

  readonly store = inject(TreeStore);

  readonly name = signal('');

  onNameModelChange(value: string) {
    this.name.set(value);
  }

  updateName(): void {
    if (this.nameInput.invalid) {
      return;
    }

    this.store.updateNodeName(this.store.selectedNode(), this.name());
  }

  updateIcon(icon: ElementIcon): void {
    this.store.updateNodeIcon(this.store.selectedNode(), icon);
  }
}
