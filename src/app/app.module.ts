// Order of imports
// Angular imports
// Angular Material imports
// Odin Modules imports
// Odin Components imports
// Odin Services imports


// Angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Angular Material imports
import { MaterialModule } from './material.module';

// Odin Modules imports
import { ProjectModule } from './project/project.module';
import { OdinRouterModule } from './odin.router.module';

// Odin Components imports
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectSettingComponent } from './project/project-setting/project-setting.component';

// Odin Services imports
import { ProjectService } from './project/project.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    // Angular Material modules
    MaterialModule,

    // Odin modules
    ProjectModule, 
    OdinRouterModule,

],
  providers: [
      ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
