import { Component } from '@angular/core';
import { NavParams,ModalController} from '@ionic/angular'
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  count:number = 0;
  userName:string="";

  constructor(private router: Router) {

  }
  

  incrementCounter() {
    this.count++;
  }
  login(){
    this.router.navigateByUrl('/account/' + this.userName)
  }

}
