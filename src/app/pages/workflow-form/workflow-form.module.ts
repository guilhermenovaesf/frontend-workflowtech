import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowFormRoutingModule } from './workflow-form-routing.module';
import { WorkflowFormComponent } from './workflow-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { WorkflowTypeFormRoutingModule } from '../workflow-type-form/workflow-type-form-routing.module';


@NgModule({
  declarations: [WorkflowFormComponent],
  imports: [
    CommonModule,
    WorkflowFormRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    WorkflowTypeFormRoutingModule,
    FroalaEditorModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class WorkflowFormModule { }
