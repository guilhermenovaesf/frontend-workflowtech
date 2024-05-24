import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { WorkflowTypeFormRoutingModule } from './workflow-type-form-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkflowTypeFormComponent } from './workflow-type-form.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';



@NgModule({
  declarations: [WorkflowTypeFormComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    WorkflowTypeFormRoutingModule,
    FroalaEditorModule
  ]
})
export class WorkflowTypeFormModule { }
