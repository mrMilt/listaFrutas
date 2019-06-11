import { Component } from '@angular/core';

/**
 * Generated class for the MyInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-input',
  templateUrl: 'my-input.html'
})
export class MyInputComponent {

  text: string;

  constructor() {
    console.log('Hello MyInputComponent Component');
    this.text = 'Input';
  }

}
