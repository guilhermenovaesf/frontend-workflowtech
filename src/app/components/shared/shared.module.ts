import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAssignedToComponent } from '../modal-assigned-to/modal-assigned-to.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalAssignedToComponent],
  exports:[
    ModalAssignedToComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],

})
export class SharedModule { }
