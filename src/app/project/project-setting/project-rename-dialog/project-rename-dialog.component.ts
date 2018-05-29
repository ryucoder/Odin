import { Component, Inject, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-project-rename-dialog',
  templateUrl: './project-rename-dialog.component.html',
  styleUrls: ['./project-rename-dialog.component.css']
})
export class ProjectRenameDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
        console.log(this.data);
        
    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
