import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'
import { NavParams,ModalController} from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router, private storage: Storage) {}
  username:String
  email:String
  notification:Boolean
  imageFile:String;

  //get existing values from storage
  async ngOnInit() {
    this.username = await this.storage.get("username");
    this.email = await this.storage.get("email");
    this.notification = await this.storage.get("notification");
    this.imageFile = await this.storage.get("image");
    this.storage.get("image").then(val => {
      this.imageFile = val;
    })
  }

  //Update username in storage
  changeUsername(){
    this.storage.set("username", this.username);
    console.log(this.username);
  }
  //Update email in storage
  changeEmail(){
    this.storage.set("email", this.email);
    console.log(this.email);
  }
  //Update notifications settings in storage
  changeNotification(){
    this.storage.set("notification", this.notification);
    console.log(this.notification);
  }
  //Update profile picture in storage
  imageSelected(files){
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    
    reader.onload = e => {
      this.imageFile = reader.result as string;
      this.storage.set("image", this.imageFile);
    }
  }

}
