import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-rename-dialog',
  templateUrl: './project-rename-dialog.component.html',
  styleUrls: ['./project-rename-dialog.component.css']
})
export class ProjectRenameDialogComponent implements OnInit, OnDestroy {

    isCreated = false;
    createSub = undefined;
    updateSub = undefined;

    constructor(private projectService: ProjectService,
        public dialogRef: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
        console.log(this.data);
        
    }

    ngOnDestroy() {

        if (this.createSub) {
            this.createSub.unsubscribe();
        }

        if (this.updateSub) {
            this.updateSub.unsubscribe();
        }

    }

    createProject() {
        this.isCreated = true;

        // if name is valid
        this.createSub = this.projectService.createProject("dragon")
                            .subscribe(
                                data => {
                                    // console.log(data);
                                    // show tooltip to user that new project is created.
                                    // redirect to list page
                                }
                            );
    }

    updateProject() {

        this.updateSub = this.projectService.updateProject(3, "dragon")
                            .subscribe(
                                data => {
                                    console.log("DONE");
                                }
                            );

    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
