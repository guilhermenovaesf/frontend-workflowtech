import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { WorkflowTypeService } from '../../services/workflow-type.service';
import { Router } from '@angular/router';
import { WorkflowService } from '../../services/workflow.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAssignedToComponent } from '../../components/modal-assigned-to/modal-assigned-to.component';
import { ModalMyflowsComponent } from '../../components/modal-myflows/modal-myflows.component';

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
              public workflowService: WorkflowService,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.workflowTypeService.getWorkflowTypes().subscribe((data) => {
      this.workflowTypeList = data;
    });
    this.getMyWorkflows();
    this.getWorkflowsAssignedToMe();
  }

  goToWorkflowForm(workflowType: any){
    this.router.navigate(['/workflow/form/'+workflowType.id]);
  }

  goToCreateWorkflowType(){
    this.router.navigate(['/workflowtype/form']);
  }

  getMyWorkflows(){
    this.workflowService.listMyWorkflows().subscribe((data)=>{
      this.myWorkflows = data;
    })
  }

  getWorkflowsAssignedToMe(){
    this.workflowService.listMyWorkflowsAssignedToMe().subscribe((data)=>{
      this.workflowsAssignedToMe = data;
    })
  }

  openMyWorklowsModal(item: any){
    console.log(item,"item")
    const dialogRef = this.dialog.open(ModalMyflowsComponent, {
      data: {data:item},
      width: '700px',
    });

  }

  opeStepToAnalise(assignedMe: any){
    const dialogRef = this.dialog.open(ModalAssignedToComponent, {
      data: {data:assignedMe},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getWorkflowsAssignedToMe();
    });

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
