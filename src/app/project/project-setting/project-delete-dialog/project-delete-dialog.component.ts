import { Component, Inject, OnInit, OnDestroy } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-delete-dialog',
  templateUrl: './project-delete-dialog.component.html',
  styleUrls: ['./project-delete-dialog.component.css']
})
export class ProjectDeleteDialogComponent implements OnInit, OnDestroy {
    
    deleteSub = undefined;

    constructor(private projectService: ProjectService,
        public dialogRef: MatDialogRef<ProjectDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() { }

    ngOnDestroy() {
        this.deleteSub.unsubscribe();
    }

    deleteProject(id) {
        this.deleteSub = this.projectService.deleteProject(id)
                            .subscribe(
                                data => {
                                    console.log(data);
                                    // close the dialog
                                    this.onCancel();

                                    // update the project list array in app component
                                    // Event emitter concept or subscribe observable in project service
                                
                                    // update the selectedProject in projectService
                                    // redirect to detail page of selectedProject
                                }
                            ); 
    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
