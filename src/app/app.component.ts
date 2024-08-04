import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreationAjaxOperatorComponent } from "./creation-ajax-operator/creation-ajax-operator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreationAjaxOperatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rxjs';
}
