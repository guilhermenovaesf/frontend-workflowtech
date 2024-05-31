import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowFormRoutingModule } from './workflow-form-routing.module';
import { WorkflowFormComponent } from './workflow-form.component';


@NgModule({
  declarations: [WorkflowFormComponent],
  imports: [
    CommonModule,
    WorkflowFormRoutingModule
  ]
})
export class WorkflowFormModule { }
