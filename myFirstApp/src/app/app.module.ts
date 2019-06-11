import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ActionSheetComponent } from './components/action-sheet/action-sheet';
import { AlertComponent } from './components/alert/alert';
import { CardComponent } from './components/card/card';
import { CkeckboxComponent } from './components/ckeckbox/ckeckbox';
import { ModalPageComponent } from './components/modal-page/modal-page';
import { MyInputComponent } from './components/my-input/my-input';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ModalPage } from './modal/modal.page';



@NgModule({
  declarations: [
    AppComponent, 
    ActionSheetComponent,
    AlertComponent,
    CardComponent,
    CkeckboxComponent,
    ModalPageComponent,
    ModalPage,
    MyInputComponent,
    AvatarComponent
  ],
  entryComponents: [ModalPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
