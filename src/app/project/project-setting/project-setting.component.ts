import { Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material';

import { ProjectService } from '../project.service';
import { ProjectRenameDialogComponent } from './project-rename-dialog/project-rename-dialog.component';
import { ProjectDeleteDialogComponent } from './project-delete-dialog/project-delete-dialog.component';


@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.css'],
})
export class ProjectSettingComponent implements OnInit, OnDestroy {

    isCreate = false;
    isEdit = true;
    
    renameSub = undefined;
    deleteSub = undefined;

    constructor(private projectService: ProjectService,
                public dialog: MatDialog ) { }

    ngOnInit() {}

    ngOnDestroy() {

        if (this.renameSub) {
            this.renameSub.unsubscribe();
        }

        if (this.deleteSub) {
            this.deleteSub.unsubscribe();
        }

    }

    openRenameDialog() {
        let dialogRef = this.dialog.open(ProjectRenameDialogComponent, {
            width: '450px',
            data: { isEdit: this.isEdit, isCreate: this.isCreate }
        });

        this.renameSub = dialogRef.afterClosed()
                            .subscribe(
                                result => {
                                    console.log('The dialog was closed');
                                    console.log(result);
                                },
                            );
    }

    openDeleteDialog() {

        let dialogRef = this.dialog.open(ProjectDeleteDialogComponent, {
            width: '450px',
        });

        this.deleteSub = dialogRef.afterClosed()
                            .subscribe(
                                result => {
                                    console.log('The dialog was closed');
                                    console.log(result);
                                },
                            );
    }
}
