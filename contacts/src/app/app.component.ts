import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx'
// import { StatusBar } from '@ionic-native/status-bar/ngx'
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // constructor(
  //   private platform: Platform,
  //   private splashScreen:SplashScreen,
  //   private statusBar: StatusBar
  // ) {
  //   this.initializeApp()

  //   }
  //   initializeApp(){
  //     this.platform.ready().then(() => {
  //       this.statusBar.styleDefault();
  //       this.splashScreen.hide();
  //     });
  //   }
  //}


   private settings;
   constructor(private router: Router, private storage: Storage) {
    this.storage.get("appSettings").then((val) => {
      if (val == null) {
        this.settings = {
          name: "Dan",
          notification: false,
          date: new Date(2020, 5, 6)
        };
      } else {
        this.settings = val;
      }
    });
  }
  async initializeApp(){
    if(await this.storage.get("appSettings") == null) {
      await this.storage.set("appSettings", "")
    }
  }
}

