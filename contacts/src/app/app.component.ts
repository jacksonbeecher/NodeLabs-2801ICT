import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
// import { Platform } from '@ionic/angular'
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';
  
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:Storage) {
    this.initializeApp();
  }
  async initializeApp() {
    const storage = await this.storage.create();
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // }); 
    if (await this.storage.get("name") == null){
      await this.storage.set("name", "Dan");
    }
    if (await this.storage.get("notification") == null){
      await this.storage.set("notification", true);
    }
    if (await this.storage.get("date") == null){
      await this.storage.set("date", "2020-12-15T13:47");
    }
  }
  
}
