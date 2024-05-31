import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkflowTypeService } from '../../services/workflow-type.service';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrl: './workflow-form.component.scss'
})
export class WorkflowFormComponent {

  workflowTypeId: any;
  workflowType:any;

  constructor(public activateRoute: ActivatedRoute, public workflowTypeService: WorkflowTypeService){
    console.log(this.activateRoute.params)
    this.activateRoute.params.subscribe((params: any) => {
      this.workflowTypeId = params.workflowTypeId;

      this.workflowTypeService.getWorkflowType(this.workflowTypeId).subscribe((data)=>{
        this.workflowType = data;
        console.log(this.workflowType,"workflowType")
      })
  })
}
}
