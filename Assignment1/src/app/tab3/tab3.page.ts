import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  user:String;
  date:Date;
  title:String;
  location:String;

  friends =[{user: 'Aaron', date:'2021/5/5', title: "Legs", location:'The local.'},
            {user: 'Dave', date:'2021/5/6', title: "Upper Body", location:'The local.'}]
  constructor() {}

}
