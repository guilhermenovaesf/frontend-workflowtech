import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { WorkflowTypeFormRoutingModule } from './workflow-type-form-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkflowTypeFormComponent } from './workflow-type-form.component';
import { FroalaEditorModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [WorkflowTypeFormComponent],
  imports: [
    CommonModule,
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
export class WorkflowTypeFormModule { }
