import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular'
import { NavParams,ModalController} from '@ionic/angular'
import { createOfflineCompileUrlResolver } from '@angular/compiler';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name:String
  notification:Boolean
  date:String
  constructor(private router: Router, private storage: Storage) {}
    
    async ngOnInit() {
      this.name = await this.storage.get("name");
      this.notification = await this.storage.get("notification")
      this.date = await this.storage.get("date");
    }


  changeName(){
    this.storage.set("name", this.name);
    console.log(this.name);
  }
  changeNotification(){
    this.storage.set("notification", this.notification);
    console.log(this.notification);
  }
  changeDate(){
    this.storage.set("date", this.date);
    console.log(this.date);
  }
}
