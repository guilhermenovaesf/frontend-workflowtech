import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { WorkflowTypeService } from '../../services/workflow-type.service';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  workflowTypeList: any[] = [];
  myWorkflows: any;
  workflowsAssignedToMe:any;

  constructor(private workflowTypeService: WorkflowTypeService,
              public userService: UserService,
              public router :Router,
              public workflowService: WorkflowService) {}

  ngOnInit(): void {
    this.workflowTypeService.getWorkflowTypes().subscribe((data) => {
      this.workflowTypeList = data;
    });
    this.getMyWorkflows();
    this.getWorkflowsAssignedToMe();
  }

  goToWorkflowForm(workflowType: any){
    this.router.navigate(['/workflow/form/'+workflowType.id]);
    console.log(workflowType)
  }

  goToCreateWorkflowType(){
    this.router.navigate(['/workflowtype/form']);
  }

  getMyWorkflows(){
    this.workflowService.listMyWorkflows().subscribe((data)=>{
      this.myWorkflows = data;
      console.log(data);
    })
  }

  getWorkflowsAssignedToMe(){
    this.workflowService.listMyWorkflowsAssignedToMe().subscribe((data)=>{
      this.workflowsAssignedToMe = data;
      console.log(this.workflowsAssignedToMe,"this.workflowsAssignedToM");
    })
  }

  openMyWorklowsModal(item: any){

  }

  opeStepToAnalise(assignedMe: any){

  }

  onTabChange(e:any){
    if(e.index == 0){
      this.getMyWorkflows();
    }
    else if(e.index == 1){
      this.getWorkflowsAssignedToMe();
    }
  }

  loggout(){
    this.userService.logout();
  }
}
