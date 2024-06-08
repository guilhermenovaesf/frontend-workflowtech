import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAssignedToComponent } from '../modal-assigned-to/modal-assigned-to.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalMyflowsComponent } from '../modal-myflows/modal-myflows.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ModalAssignedToComponent,ModalMyflowsComponent],
  exports:[
    ModalAssignedToComponent,ModalMyflowsComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],

})
export class SharedModule { }
