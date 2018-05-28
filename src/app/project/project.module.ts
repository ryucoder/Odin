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

// Angular Material imports
import { MaterialModule } from '../material.module';

// Odin Modules imports
// nothing here

// Odin Components imports
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectSettingComponent } from './project-setting/project-setting.component';

import { ProjectRenameDialog } from './project-setting/project-setting.component';
// Odin Services imports
// nothing here


@NgModule({
    declarations: [
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectSettingComponent,
        ProjectRenameDialog,
    ],
    entryComponents: [ProjectRenameDialog],
    imports: [
        CommonModule,
        MaterialModule,
        // MatToolbarModule,
        // MatInputModule,
        // MatButtonModule,
        // MatDividerModule,
        // MatTabsModule,
    ],
    providers: [],
    exports: [        
        ProjectListComponent,
        ProjectDetailComponent,
    ],
    // bootstrap: [ProjectListComponent]
})
export class ProjectModule { }
