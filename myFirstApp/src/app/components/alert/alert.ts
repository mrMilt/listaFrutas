import { Component } from '@angular/core';
import { AlertController } from "@ionic/angular";

/**
 * Generated class for the AlertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'alert',
  templateUrl: 'alert.html'
})
export class AlertComponent {

  text: string;

  constructor(public alertController : AlertController) {
    console.log('Hello AlertComponent Component');
    this.text = 'Alert';
  }

  async presentAlert ( ) { 
    const alert = await this.alertController.create ( { 
    header : 'Alert' , 
    subHeader : 'Subtitle' , 
    message : 'Este es un mensaje de alerta.' , 
    buttons : [ 'OK' ] } ) ; 
    await alert.present() ; 
  }

  async presentAlertMultipleButtons ( )  { 
    const alert =  await this.alertController.create ( { 
      header :  'Alert' , 
      subHeader :  'Subtitle' , 
      message :  'Este es un mensaje de alerta.' , 
      buttons :  [ 'Cancel' ,  'Open Modal' ,  'Delete' ] 
    } ) ; 
    await alert.present() ; 
  }

  async  presentAlertConfirm ( )  { 
    const alert =  await  this.alertController . create ( { 
      header :  'Confirm!' , 
      message :  'Message <strong> text </strong> !!!' , 
      buttons :  [ 
        { 
          text :  'Cancel' , 
          role :  'cancel' , 
          cssClass :  'secondary' , 
          handler :  ( bla ) =>  { 
            console.log( 'Confirmar cancelación: bla' ) ; 
          } 
        } ,  { 
          text :  'Bien' , 
          handler :  ( )  =>  { 
            console.log( 'Confirmar bien' ) ; 
          } 
        } 
      ] 
    } ) ; 
    await alert.present( ) ; 
  } 
  
  async presentAlertPrompt ( ) { 
    const alert =  await  this.alertController.create ( { 
      header :  'Prompt!' , 
      inputs :  [ 
        { 
          name :  'name1' , 
          type :  'text' , 
          placeholder :  'Placeholder 1' 
        } , 
        { 
          name :  'name2' , 
          type :  'text' , 
          id :  ' name2-id ' , 
          value :  ' hola ' ,
          placeholder :  'Marcador de posición 2' 
        } , 
        { 
          name :  'nombre3' , 
          value :  'http://ionicframework.com' , 
          type :  'url' , 
          placeholder :  'sitio favorito de siempre' 
        } , 
        // fecha de entrada con mín y máx 
        { 
          name :  'name4' , 
          label :  'date' , 
          min :  '2017-03-01' , 
          max :  '2018-01-12' 
        } ,
        // ingrese la fecha sin min ni max 
        { 
          name :  'name5' , 
          label :  'date' 
        } , 
        { 
          name :  'name6' , 
          label :  'number' , 
          min :  - 5 , 
          max :  10 
        } , 
        { 
          name :  'name7 ' , 
          label :  ' número ' 
        } 
      ] , 
      buttons :  [ 
        { 
          text :  ' Cancelar ', 
          role :  'cancel' , 
          cssClass :  'secondary' , 
          handler :  ( )  =>  { 
            console.log( 'Confirmar Cancelar' ) ; 
          } 
        } ,  { 
          text :  'Ok' , 
          handler :  ( )  =>  { 
            console.log( 'Confirmar Ok' ) ; 
          } 
        } 
      ] 
    } ) ; 

    await alert . present ( ) ; 

  } 
}
