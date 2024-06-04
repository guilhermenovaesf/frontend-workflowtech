import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutesModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { WorkflowTypeFormModule } from './pages/workflow-type-form/workflow-type-form.module';
import 'froala-editor/js/plugins.pkgd.min.js';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SharedModule } from './components/shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
            AppRoutesModule,
            HttpClientModule ,
            BrowserAnimationsModule,
            DashboardModule,
            WorkflowTypeFormModule,
            FroalaViewModule.forRoot(),
            FroalaEditorModule.forRoot(),
            SharedModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
