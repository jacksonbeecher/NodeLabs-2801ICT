import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WorkoutmodalPage } from '../workoutmodal/workoutmodal.page';

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
  workouts =[{title: 'Chest', date:'2021/5/5', description: "10x Reps", location:'The local.', rating:5 },
             {title: 'Legs', date:'2021/5/6', description: "15x Reps", location:'The local.', rating:10}]


  constructor(private modalController: ModalController) {}

  //add
  async addWorkout(){
    const modal = await this.modalController.create({
      component: WorkoutmodalPage,
      componentProps: { }
    });
    modal.onDidDismiss()
    .then((retval) => {
      if (retval.data !== undefined){
        this.workouts.push(retval.data)
      }
    });
    return modal.present();
  }
  //Delete 
  async deleteWorkout(i:number){
    this.workouts.splice(i,1)
  }
  //edit
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
   });
     return editmodal.present();
  }
}