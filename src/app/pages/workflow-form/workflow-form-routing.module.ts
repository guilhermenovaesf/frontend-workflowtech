import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowFormComponent } from './workflow-form.component';

const routes: Routes = [{ path: '', component: WorkflowFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowFormRoutingModule { }
