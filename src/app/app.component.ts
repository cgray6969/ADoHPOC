import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello Joe {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
