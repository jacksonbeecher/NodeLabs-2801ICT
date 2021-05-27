import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:Storage, platform: Platform) {
    this.initializeApp();
  }
  key:string = "workouts"
  //initalize app settings
  async initializeApp() {
    const storage = await this.storage.create();
    //Load workouts list
    this.storage.get("workouts").then((val)=>{
        if (val == null) {
          this.storage.set("workouts", []);
        }
    });
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // }); 
    //load userdefault image
    if (await this.storage.get("username") == null){
      await this.storage.set("username", "");
    }
    if (await this.storage.get("email") == null){
      await this.storage.set("email", "");
    }
    if (await this.storage.get("notification") == null){
      await this.storage.set("notification", true);
    }
    if (await this.storage.get("image") == null){
      await this.storage.set("image", "assets/noimage.png");
    }
  }
}
