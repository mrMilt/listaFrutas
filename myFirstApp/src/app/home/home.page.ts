import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  frutas:any[] = [
    {name: 'Apple', img:'/assets/apple.jpg', url: '/assets/apple.mp3', status:true},
      {name: 'Banana', img:'/assets/banana.jpg', url: '/assets/banana.mp3', status:true},
      {name: 'Cherry', img:'/assets/cherry.jpg', url: '/assets/cherries.mp3', status:true},
      {name: 'Grapes', img:'/assets/grapes.jpg', url: '/assets/grapes.mp3', status:true},
      {name: 'Lemon', img:'/assets/lemon.jpg', url: '/assets/lemon.mp3', status:true}, 
      {name: 'Orange', img:'/assets/orange.jpg', url: '/assets/orange.mp3', status:true}, 
      {name: 'Pear', img:'/assets/pear.jpg', url: '/assets/pear.mp3', status:true},
      {name: 'Pineapple', img:'/assets/pineapple.jpg', url: '/assets/pineapple.mp3', status:true}, 
      {name: 'Plumb', img:'/assets/plumb.jpg', url: '/assets/plumbs.mp3', status:true}, 
      {name: 'Strawberry', img:'/assets/strawberry.jpg', url: '/assets/strawberries.mp3', status:true}];

  constructor() {}

  play(url, index) {
    let audio = new Audio(url);
    if (this.frutas[index].status == true) {
      console.log('1');     
      audio.play();  
      this.frutas[index].status =  false;
    } else {
      audio.pause();
      this.frutas[index].status =  true;
      console.log('2');   
      
    }
  }
}
