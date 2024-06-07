import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-modal-assigned-to',
  templateUrl: './modal-assigned-to.component.html',
  styleUrl: './modal-assigned-to.component.scss'
})
export class ModalAssignedToComponent implements OnInit {

  selected: any;
  workflowSteps: any;
  comment: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public workflowService: WorkflowService,public dialogRef: MatDialogRef<any>){
    this.selected = data.data;
    console.log(dialogRef,"dialogRef")

  }
  ngOnInit(): void {
    this.workflowService.listWorkflowSteps(this.selected.workflowId).subscribe((data)=>{
      this.workflowSteps = data;
      console.log(this.workflowSteps,"this.workflowSteps")
    })
  }

  rejectStep(step: any){
    let stepTOReject = {
      workflowId: this.selected.workflowId,
      workflowStepId: step.id,
      comment: this.comment,
      aproved: false
    }
    this.workflowService.approveOrRejectWorkflow(stepTOReject).subscribe((data)=>{
      this.dialogRef.close();
    });
  }

  aproveStep(step: any){
    let stepTOAprove = {
      workflowId: this.selected.workflowId,
      workflowStepId: step.id,
      comment: this.comment,
      aproved: true
    }
    this.workflowService.approveOrRejectWorkflow(stepTOAprove).subscribe((data)=>{
      console.log("a")
      this.dialogRef.close();
    });
  }
}
