import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkflowTypeFormComponent } from './workflow-type-form.component';

const routes: Routes = [{ path: '', component: WorkflowTypeFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowTypeFormRoutingModule { }
