import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  name:string = "";
  notification:boolean = false;
  date:Date = new Date(2020,5,5);

  constructor(private router: Router, private storage: Storage) {
    this.init();
  }
  async init(){
    const storage = await this.storage.create();
  }
  async ngOnInit() {
    this.name = await this.storage.get("name")
    this.notification = await this.storage.get("notif")
    this.date = await this.storage.get("remind")
    if(this.name == null) this.name = "";
    if(this.notification == null) this.notification = false;
    if(this.date == null) this.date = new Date(2020,5,6);
  }
}
