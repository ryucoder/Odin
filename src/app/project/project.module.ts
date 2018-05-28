// Order of imports
// Angular imports
// Angular Material imports
// Odin Modules imports
// Odin Components imports
// Odin Services imports
// nothing here


// Angular imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material imports
import { MaterialModule } from '../material.module';

// Odin Modules imports
// nothing here

// Odin Components imports
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';
import { ProjectRenameDialogComponent } from './project-setting/project-setting.component';

// Odin Services imports
import { ProjectService } from './project.service';



@NgModule({
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectSettingComponent,
        ProjectRenameDialogComponent,
    ],
    entryComponents: [ProjectRenameDialogComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        // MatToolbarModule,
        // MatInputModule,
        // MatButtonModule,
        // MatDividerModule,
        // MatTabsModule,
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
