import { Component } from '@angular/core';
import { ModalController, IonItemSliding } from '@ionic/angular';
import { WorkoutmodalPage } from '../workoutmodal/workoutmodal.page';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  title:String;
  date:Date;
  description:String;
  location:String;
  rating:Number;
  //Sample data
  // workouts =[{title: 'Chest', date:'2020-12-15', description: "10x Reps", location:'The local.', rating:5 },
  //            {title: 'Legs', date:'2020-12-15', description: "15x Reps", location:'The local.', rating:10}]
  workouts = []

  constructor(private modalController: ModalController, private storage:Storage) {
    //Initialise list values
    this.storage.get("workouts").then((val)=> {
      this.workouts = val;
      console.log(this.workouts)
    });
  }
  
  //add workout to list and storage
  async addWorkout(){
    const modal = await this.modalController.create({
      component: WorkoutmodalPage,
      componentProps: { }
    });
    modal.onDidDismiss()
    .then((retval) => {
      if (retval.data !== undefined){
        this.workouts.push(retval.data)
        this.storage.set("workouts", this.workouts)
        console.log(this.workouts)
      }
    });
    
    return modal.present();
  }
  //Delete workout from list and storage
  async deleteWorkout(i:number){
    this.workouts.splice(i,1)
    this.storage.set("workouts", this.workouts)
    console.log(this.workouts)
  }
  //edit workout and storage
  async editWorkout(i:number){
 
    const editmodal = await this.modalController.create({
      component: WorkoutmodalPage,
      componentProps: { 
        title: this.workouts[i].title,
        date:this.workouts[i].date, 
        description:this.workouts[i].description,
        location:this.workouts[i].location,
        rating:this.workouts[i].rating,
        }
    });
    editmodal.onDidDismiss()
      .then((retval) => {
        this.workouts[i].title = retval.data.title;
        this.workouts[i].date = retval.data.date;
        this.workouts[i].description = retval.data.description;
        this.workouts[i].location = retval.data.location;
        this.workouts[i].rating = retval.data.rating;
        this.storage.set("workouts", this.workouts)
        console.log(this.workouts)
   });
    return editmodal.present();
    
    
  }
}