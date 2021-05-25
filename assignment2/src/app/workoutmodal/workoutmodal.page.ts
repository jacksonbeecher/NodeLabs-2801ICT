import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from '@ionic/angular'

@Component({
  selector: 'app-workoutmodal',
  templateUrl: './workoutmodal.page.html',
  styleUrls: ['./workoutmodal.page.scss'],
})
export class WorkoutmodalPage implements OnInit {
  //setup vars
  title="";
  date="";
  description="";
  location="";
  rating="";
  addButton = "Add";
  constructor(private navParams:NavParams, private modalController:ModalController) { }

  ngOnInit() {
    this.title = this.navParams.get("title");
    this.date = this.navParams.get("date");
    this.description = this.navParams.get("description");
    this.location = this.navParams.get("location");
    this.rating = this.navParams.get("rating");

    if (this.title != "" && this.title !=undefined){
      this.addButton = 'Edit';
    } else {
      this.addButton = 'Add';
    }
  }
  closeModal(){
    this.modalController.dismiss({title:this.title,date:this.date,description:this.description,location:this.location,rating:this.rating});
  }

}