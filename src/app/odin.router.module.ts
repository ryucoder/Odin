// Order of imports
// Angular imports
// Angular Material imports
// Odin Modules imports
// Odin Components imports
// Odin Services imports

// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Odin Components imports
import { AppComponent } from './app.component';
// import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectSettingComponent } from './project/project-setting/project-setting.component';


const appRoutes = [
    { path: 'home', component: AppComponent },
    { path: 'project/detail/:id', component: ProjectDetailComponent },
    { path: 'project/settings/:id', component: ProjectSettingComponent },
    // { path: '', redirectTo: '/home', pathMatch: 'full'  },
    // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
    declarations: [],
    imports: [
        // RouterModule.forChild(appRoutes),
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})
export class OdinRouterModule { }
