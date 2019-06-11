import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActionSheetComponent } from './components/action-sheet/action-sheet';
import { AlertComponent } from './components/alert/alert';
import { CardComponent } from './components/card/card';
import { CkeckboxComponent } from './components/ckeckbox/ckeckbox';
import { ModalPageComponent } from './components/modal-page/modal-page';
import { MyInputComponent } from './components/my-input/my-input';
import { AvatarComponent } from './components/avatar/avatar.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'actionSheet',
    component: ActionSheetComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'avatar',
    component: AvatarComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
  {
    path: 'checkbox',
    component: CkeckboxComponent
  },
  {
    path: 'modal',
    component: ModalPageComponent
  },
  {
    path: 'input',
    component: MyInputComponent
  },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
