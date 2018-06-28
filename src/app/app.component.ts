import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProjectService } from './project/project.service';
import { ProjectRenameDialogComponent } from './project/project-setting/project-rename-dialog/project-rename-dialog.component';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    projectList = undefined;
    projectServiceSub = undefined;

    isCreate = true;
    isEdit = false;

    constructor(private projectService: ProjectService,
    public dialog: MatDialog) { }

    ngOnInit() {
        this.projectServiceSub = this.projectService.getProjectList()
                                        .subscribe(
                                            data => {
                                                this.projectService.projectList = data;
                                                // console.log('\n');
                                                // console.log(this.projectService.projectList);
                                                // console.log('\n');
                                                
                                                this.projectService.updateSelectedProject();
                                                // console.log(this.projectService.selectedProject);
                                                // console.log('\n');
                                            },
                                            error => console.log("My Error " + ""),
                                            () => {
                                                console.log('completed');
                                            }
                                        );
    }

    ngOnDestroy() {
        this.projectServiceSub.unsubscribe();
    }


    openCreateDialog() {
        let dialogRef = this.dialog.open(ProjectRenameDialogComponent, {
            width: '450px',
            data: { isEdit: this.isEdit, isCreate: this.isCreate }
        });

        dialogRef.afterClosed()
            .subscribe(
                result => {
                    console.log('The dialog was closed');
                    console.log(result);
                    // this.animal = result;
                },
        );
    }

}
