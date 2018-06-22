// Order of imports
// Angular imports
// Angular Material imports
// Odin Modules imports
// Odin Components imports
// Odin Services imports


// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material imports
import { MaterialModule } from '../material.module';

// Odin Modules imports

// Odin Components imports
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { ProjectRenameDialogComponent } from './project-setting/project-rename-dialog/project-rename-dialog.component';
import { ProjectDeleteDialogComponent } from './project-setting/project-delete-dialog/project-delete-dialog.component';

// Odin Services imports
import { ProjectService } from './project.service';



@NgModule({
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectSettingComponent,
        ProjectRenameDialogComponent,
        ProjectDeleteDialogComponent,
    ],
    entryComponents: [
        ProjectRenameDialogComponent,
        ProjectDeleteDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    providers: [
        ProjectService,
    ],
    exports: [
        ProjectListComponent,
        ProjectDetailComponent,
    ],
    // bootstrap: [ProjectListComponent]
})
export class ProjectModule { }
