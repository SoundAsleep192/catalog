import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-redactor',
  standalone: true,
  imports: [],
  templateUrl: './redactor.component.html',
  styleUrl: './redactor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RedactorComponent {

}
