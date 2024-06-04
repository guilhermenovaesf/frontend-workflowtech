import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-modal-assigned-to',
  templateUrl: './modal-assigned-to.component.html',
  styleUrl: './modal-assigned-to.component.scss'
})
export class ModalAssignedToComponent implements OnInit {

  selected: any;
  workflowSteps: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public workflowService: WorkflowService){
    this.selected = data.data;

  }
  ngOnInit(): void {
    this.workflowService.listWorkflowSteps(this.selected.workflowId).subscribe((data)=>{
      this.workflowSteps = data;
      console.log(this.workflowSteps,"this.workflowSteps")
    })
  }
}
