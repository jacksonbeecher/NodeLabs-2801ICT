import { Component } from '@angular/core';
import { NavParams,ModalController} from '@ionic/angular'
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username:string="";
  password:string="";
  constructor(private router: Router) {

  }
  login(){
    this.router.navigateByUrl('/account/' + this.username)
  }
}
