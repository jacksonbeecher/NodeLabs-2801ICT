import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutmodalPage } from './workoutmodal.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutmodalPageRoutingModule {}
