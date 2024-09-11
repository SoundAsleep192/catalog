import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ElementIcons } from '../../constants/element-icons.const';
import { MatIconModule } from '@angular/material/icon';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-redactor',
  standalone: true,
  imports: [MatInputModule, MatSelectModule, MatIconModule, TitleCasePipe],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RedactorComponent {
  readonly icons = Object.values(ElementIcons);
  readonly iconNames = Object.keys(ElementIcons);
}
