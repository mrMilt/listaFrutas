import { Component, OnInit } from '@angular/core';
import { NavController,  NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public nacCtrl: NavController, public navParams: NavParams, public viewCtrl: ModalController) { }

  ngOnInit() {
  }

  async cerrarModal() {
    let result = "se cerro";
    this.viewCtrl.dismiss();
  }
}
