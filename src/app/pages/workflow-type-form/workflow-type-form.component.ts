import { WorkflowTypeService } from './../../services/workflow-type.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-type-form',
  templateUrl: './workflow-type-form.component.html',
  styleUrl: './workflow-type-form.component.scss'
})
export class WorkflowTypeFormComponent {
  public froalaTiny: any = {
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
    htmlAllowedEmptyTags: ['textarea', 'a', 'iframe', 'object', 'video', 'style', 'script', '.fa', 'span', 'p', 'path', 'line', 'circle'],
    htmlAllowedTags: ['.*'],
    htmlAllowedAttrs: ['.*'],
    htmlRemoveTags: [],
    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'align', 'formatOL', 'formatUL',  'insertLink', 'insertTable','html'],
    imageUploadParam: 'file',
    imageUploadParams: { id: 'my_editor' },
    imageUploadMethod: 'POST',
    imageAllowedTypes: ['jpeg', 'jpg', 'png'],
    fileUploadParams: { id: 'my_editor' },
    fileAllowedTypes:  ['pdf', 'ppt', 'xls', 'xlsx', 'docx', 'doc'],
    fileMaxSize: 1024 * 1024 * 10,
    videoAllowedTypes: [''],
    videoMaxSize: 1024,
    videoUpload: false,
    language: 'en',
    zIndex: 789
  };

  form: FormGroup;
  userList:any;
  constructor(private fb: FormBuilder, public userService :UserService, public workflowTypeService : WorkflowTypeService, public router: Router) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      workflowTypeStepTOList: this.fb.array([])
    });
  }

  ngOnInit(): void {
      this.userService.listUsers().subscribe((data)=>{
        this.userList = data;
        console.log(this.userList)
      })
  }

  get steps(): FormArray {
    return this.form.get('workflowTypeStepTOList') as FormArray;
  }

  addStep(): void {
    const stepForm = this.fb.group({
      description: [''],
      user: ['']
    });
    this.steps.push(stepForm);
  }

  removeStep(index: number): void {
    this.steps.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const clonedFormValue = this.cloneDeep(this.form.value);

      clonedFormValue.workflowTypeStepTOList.forEach((step: any, index: number) => {
        const user = this.selectedUser(index);
        if (user) {
          step.user = user;  // Atualiza o campo 'user' com o objeto de usuário completo
        } else {
          console.warn(`User not found for step ${index + 1}`);
        }
      });
      this.workflowTypeService.createWorkflowType(clonedFormValue).subscribe((data)=>{
        this.router.navigate(['/dashboard']);
      })
      console.log('Original form value:', this.form.value);
      console.log('Cloned and modified form value:', clonedFormValue);

      // Processar os dados do formulário clonados e modificados conforme necessário
    }
  }

  selectedUser(stepIndex: number) {
    const stepControl = this.steps.at(stepIndex);
    if (stepControl) {
      const userControl = stepControl.get('user');
      if (userControl) {
        const selectedUserId = userControl.value;
        console.log('Selected user ID:', selectedUserId);
        const user = this.userList.find((user: { id: any; }) => user.id == selectedUserId);
        if (!user) {
          console.warn(`No user found with ID ${selectedUserId}`);
        }
        return user;
      }
    }
    return null;
  }

  cloneDeep(obj: any) {
    return JSON.parse(JSON.stringify(obj));
  }
}
