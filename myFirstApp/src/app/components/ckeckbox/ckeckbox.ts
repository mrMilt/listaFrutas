import { Component } from '@angular/core';

/**
 * Generated class for the CkeckboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ckeckbox',
  templateUrl: 'ckeckbox.html'
})
export class CkeckboxComponent {

  text: string;

  constructor() {
    console.log('Hello CkeckboxComponent Component');
    this.text = 'Ckeckbox';
  }

    public form = [
        { val: 'Pepperoni', isChecked: true },
        { val: 'Sausage', isChecked: false },
        { val: 'Mushroom', isChecked: false }
      ];
}
