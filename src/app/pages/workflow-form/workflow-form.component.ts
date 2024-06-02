import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkflowTypeService } from '../../services/workflow-type.service';
import { WorkflowService } from '../../services/workflow.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrl: './workflow-form.component.scss',
})
export class WorkflowFormComponent {
  public froala: any = {
    placeholderText: '',
    charCounterCount: false,
    heightMin: 200,
    heightMax: 300,
    attribution: false,
    pastePlain: true,
    pasteAllowedStyleProps: ['font-size', 'color'],
    pasteDeniedAttrs: ['class', 'style'],
    key: 'zEG4iB2C7D9B5B4F6g1JWSDBCQG1ZGDf1C1d2JXDAAOZWJhE5B4E4D3F2I3A8A4C4F4==',
    htmlDoNotWrapTags: ['br', 'script', 'style'],
    htmlAllowedEmptyTags: [
      'textarea',
      'a',
      'iframe',
      'object',
      'video',
      'style',
      'script',
      '.fa',
      'span',
      'p',
      'path',
      'line',
      'circle',
    ],
    htmlAllowedTags: ['.*'],
    htmlAllowedAttrs: ['.*'],
    htmlRemoveTags: [],
    toolbarButtons: [
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'align',
      'formatOL',
      'formatUL',
      'insertLink',
      'insertTable',
      'html',
    ],
    language: 'en',
    zIndex: 789,
  };

  workflowTypeId: any;
  workflowType: any;
  description: any;

  form: FormGroup;

  constructor(
    public activateRoute: ActivatedRoute,
    public workflowTypeService: WorkflowTypeService,
    public workflowService: WorkflowService,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.form = this.fb.group({
      description: [''],
    });

    this.activateRoute.params.subscribe((params: any) => {
      this.workflowTypeId = params.workflowTypeId;

      this.workflowTypeService
        .getWorkflowType(this.workflowTypeId)
        .subscribe((data) => {
          this.workflowType = data;
          console.log(this.workflowType, 'workflowType');
        });
    });
  }

  onSubmit(){
    console.log(this.form.value,"this.form.value")
    let workflowForm ={
      workflowTypeId: this.workflowTypeId,
      description: this.form.value.description
    }
    this.workflowService.createWorkflow(workflowForm).subscribe((data)=>{
      this.router.navigate(['/dashboard']);
    })
  }

  returnDash(){
    this.router.navigate(['/dashboard']);
  }
}
