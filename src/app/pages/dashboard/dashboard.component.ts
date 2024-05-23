import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { WorkflowTypeService } from '../../services/workflow-type.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  workflowTypeList: any[] = [];

  constructor(private workflowTypeService: WorkflowTypeService , public userService: UserService) {}

  ngOnInit(): void {
    this.workflowTypeService.getWorkflowTypes().subscribe((data) => {
      this.workflowTypeList = data;
      console.log(this.workflowTypeList)
    });
  }

  goToWorkflowForm(workflowType: any){
    console.log(workflowType)
  }

  goToCreateWorkflowType(){

  }
}
