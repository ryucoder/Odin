import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../project.service';
import { ProjectRenameDialogComponent } from './project-rename-dialog/project-rename-dialog.component';
import { ProjectDeleteDialogComponent } from './project-delete-dialog/project-delete-dialog.component';


@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.css'],
})
export class ProjectSettingComponent implements OnInit {
    animal: string;
    name: string;

    isCreate = false;
    isEdit = true;
    

    constructor(private projectService: ProjectService,
                public dialog: MatDialog ) { }

    ngOnInit() {}

    openRenameDialog() {
        let dialogRef = this.dialog.open(ProjectRenameDialogComponent, {
            width: '450px',
            data: { isEdit: this.isEdit, isCreate: this.isCreate }
        });

        dialogRef.afterClosed()
                    .subscribe(
                        result => {
                            console.log('The dialog was closed');
                            console.log(result);
                            this.animal = result;
                        },
                    );
    }

    openDeleteDialog() {

        let dialogRef = this.dialog.open(ProjectDeleteDialogComponent, {
            width: '450px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed()
                    .subscribe(
                        result => {
                            console.log('The dialog was closed');
                            console.log(result);
                            this.animal = result;
                        },
                    );

    }
}
