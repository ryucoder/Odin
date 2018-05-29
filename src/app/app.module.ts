// Order of imports
// Angular imports
// Angular Material imports
// Odin Modules imports
// Odin Components imports
// Odin Services imports
// nothing here // for empty imports


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

// Odin Components imports
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectSettingComponent } from './project/project-setting/project-setting.component';

// Odin Services imports
import { ProjectService } from './project/project.service';


const appRoutes = [
    // { path: '', redirectTo: '/home', pathMatch: 'full'  },
    { path: 'home', component: AppComponent },
    { path: 'project/detail/:id', component: ProjectDetailComponent },
    { path: 'project/settings/:id', component: ProjectSettingComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    
    // Angular Material modules
    MaterialModule,

    // Odin modules
    ProjectModule,

],
  providers: [
      ProjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
