import { Component, OnInit } from '@angular/core';

import { ProjectService } from '../project.service';


import { Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';



/**
 * @title Dialog Overview
 */
@Component({
    selector: 'project-rename-dialog',
    template: `
        <h1 mat-dialog-title color="primary">Rename Project</h1>
        <div>
            <form>
                <div mat-dialog-content>
                    <p>Choose a new name for the project.</p>
                    <mat-form-field style="width: 100%;">
                        <input matInput placeholder = "Type new name here">
                    </mat-form-field>
                </div>
                <div mat-dialog-actions>
                <button mat-raised-button color="accent" [mat-dialog-close]="data.animal" >Rename</button>
                <button mat-raised-button color="warn" (click)="onNoClick()" cdkFocusInitial>Cancel</button>
                </div>
            </form>
        </div>
    `,
})
export class ProjectRenameDialog {

    constructor(
        public dialogRef: MatDialogRef<ProjectRenameDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}


@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.css'],
})
export class ProjectSettingComponent implements OnInit {


    animal: string;
    name: string;

    constructor(public dialog: MatDialog,
        private projectService: ProjectService,
    ) { }

    openDialog(): void {
        let dialogRef = this.dialog.open(ProjectRenameDialog, {
            width: '450px',
            data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

    // constructor(private projectService: ProjectService,
    //     public dialogRef: MatDialogRef<ProjectSettingComponent>,
    //     @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
