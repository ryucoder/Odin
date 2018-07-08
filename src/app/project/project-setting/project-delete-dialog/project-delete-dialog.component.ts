import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
        public deleteDialog: MatDialogRef<ProjectDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private router: Router ) { }

    ngOnInit() { }

    ngOnDestroy() {

        if (this.deleteSub) {
            this.deleteSub.unsubscribe();
        }
    }

    deleteProject(id) {
        this.deleteSub = this.projectService.deleteProject(id)
                            .subscribe(
                                data => {
                                    console.log(data);
                                    // close the dialog
                                    this.onCancel();

                                    // update the project list array in app component
                                    this.projectService.removeFromProjectList(id);

                                    // update the selectedProject in projectService
                                    this.projectService.updateSelectedProject();

                                    // redirect to detail page of selectedProject
                                    this.router.navigate(['/project/detail/', this.projectService.selectedProject.id]);

                                    // show tooltip to the user that project has been deleted
                                }
                            ); 
    }

    onCancel(): void {
        this.deleteDialog.close();
    }

}
