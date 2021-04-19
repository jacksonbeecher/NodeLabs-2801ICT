import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  firstName="";
  lastName="";
  email="";
  addButton = "Add";
  constructor(private navParams:NavParams, private modalController:ModalController) { }

  ngOnInit() {
    this.firstName = this.navParams.get("firstName");
    this.lastName = this.navParams.get("lastName");
    this.email = this.navParams.get("email");
    if (this.firstName != "" && this.firstName !=undefined){
      this.addButton = 'Edit';
    }else{
      this.addButton = 'Add';
    }
  }
  closeModal(){
    this.modalController.dismiss({firstName:this.firstName,lastName:this.lastName,email:this.email});
  }
}
