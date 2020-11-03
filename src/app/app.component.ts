import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola';

  curso: string = "aprendé a programar daun";
  profesor: string = "Marcelo"
}
