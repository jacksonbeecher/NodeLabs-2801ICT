import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutmodalPageRoutingModule } from './workoutmodal-routing.module';

import { WorkoutmodalPage } from './workoutmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutmodalPageRoutingModule
  ],
  declarations: [WorkoutmodalPage]
})
export class WorkoutmodalPageModule {}
