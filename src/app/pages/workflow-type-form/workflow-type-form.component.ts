import { Component } from '@angular/core';

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
}
