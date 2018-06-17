import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-rename-dialog',
  templateUrl: './project-rename-dialog.component.html',
  styleUrls: ['./project-rename-dialog.component.css']
})
export class ProjectRenameDialogComponent implements OnInit {

    isCreated = false;

    constructor(private projectService: ProjectService,
        public dialogRef: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
        console.log(this.data);
        
    }


    createProject() {
        this.isCreated = true;

        // if name is valid
        this.projectService.createProject("dragon")
            .subscribe({
                data => {
                    // console.log(data);
                    // show tooltip to user that new project is created.
                    // redirect to list page

                }
            });
    }

    updateProject() {
        // if name is valid
        this.projectService.updateProject(3, "dragon")
            .subscribe({
                data => {
                    // console.log(data);
                    // show tooltip to user that new project is created.
                    // redirect to list page
                    console.log("DONE");
                    
                }
            });

    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
