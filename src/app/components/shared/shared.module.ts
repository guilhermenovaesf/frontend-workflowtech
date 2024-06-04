import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAssignedToComponent } from '../modal-assigned-to/modal-assigned-to.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ModalAssignedToComponent],
  exports:[
    ModalAssignedToComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],

})
export class SharedModule { }
