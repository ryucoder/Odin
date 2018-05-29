import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-project-delete-dialog',
  templateUrl: './project-delete-dialog.component.html',
  styleUrls: ['./project-delete-dialog.component.css']
})
export class ProjectDeleteDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ProjectDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
