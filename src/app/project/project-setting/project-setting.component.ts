import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../project.service';


@Component({
    selector: 'project-rename-dialog',
    template: `
        <h1 mat-dialog-title color="primary">Rename Project</h1>
        <div>
            <form>
                <div mat-dialog-content>
                    <p>Choose a new name for the project.</p>
                    <mat-form-field style="width: 100%;">
                        <input matInput placeholder = "Type new name here" name="name" [(ngModel)]="data.animal">
                    </mat-form-field>
                </div>
                <div mat-dialog-actions>
                    <button mat-raised-button color="accent" [mat-dialog-close]="data.animal" >Rename</button>
                    <button mat-raised-button color="warn" (click)="onCancel()" cdkFocusInitial>Cancel</button>
                </div>
            </form>
        </div>
    `,
})
export class ProjectRenameDialogComponent {

    constructor(public dialogRef: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onCancel(): void {
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

    constructor(private projectService: ProjectService,
                public dialog: MatDialog ) { }

    ngOnInit() {}

    openDialog(): void {
        let dialogRef = this.dialog.open(ProjectRenameDialogComponent, {
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
