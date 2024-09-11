import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeComponent } from '../components/tree/tree.component';
import { RedactorComponent } from "../components/redactor/redactor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TreeComponent, RedactorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
