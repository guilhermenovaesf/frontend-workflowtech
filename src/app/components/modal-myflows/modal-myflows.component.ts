import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-modal-myflows',
  templateUrl: './modal-myflows.component.html',
  styleUrls: ['./modal-myflows.component.scss']
})
export class ModalMyflowsComponent implements OnInit {

  selected: any;
  workflowSteps: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public workflowService: WorkflowService,public dialogRef: MatDialogRef<any>) {
    this.selected = data.data;
    console.log(dialogRef,"dialogRef")
   }

  ngOnInit() {
    this.workflowService.listWorkflowSteps(this.selected.id).subscribe((data)=>{
      this.workflowSteps = data;
      console.log(this.workflowSteps,"this.workflowSteps")

    })
  }

}
