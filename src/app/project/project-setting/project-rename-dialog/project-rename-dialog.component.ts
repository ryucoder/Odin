import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-rename-dialog',
  templateUrl: './project-rename-dialog.component.html',
  styleUrls: ['./project-rename-dialog.component.css']
})
export class ProjectRenameDialogComponent implements OnInit, OnDestroy {

    isCreated = false;
    createSub = undefined;
    updateSub = undefined;

    projectCreateError = undefined;
    projectCreateForm = undefined;

    constructor(private projectService: ProjectService,
        private formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
        // console.log(this.data);

        this.projectCreateForm = new FormGroup({
            projectName: new FormControl(),
            // projectName: new FormControl("RyuCoder"),
        });
        
        this.projectCreateForm = this.formBuilder.group({
            projectName: [{ value: "Mr. Turbo", disabled: false}, []]
        });




    }

    ngOnDestroy() {

        if (this.createSub) {
            this.createSub.unsubscribe();
        }

        if (this.updateSub) {
            this.updateSub.unsubscribe();
        }

    }

    onCreateProject() {
        console.log("\n");
        console.log(this.projectCreateForm.controls.projectName.value);
        console.log("\n");
        
        if(this.projectCreateForm.dirty && this.projectCreateForm.valid) {

            // Object.assign({}, this.projectName, this.projectCreateForm.value);

            this.createSub = this.projectService.createProject(this.projectCreateForm.controls.projectName.value)
                            .subscribe(
                                data => {
                                    // console.log(data);
                                    // show tooltip to user that new project is created.
                                    // redirect to list page
                                    this.projectCreateForm.reset();
                                },
                                error => console.log("Create Project Error : " + error),
                                () => {
                                    this.isCreated = true;
                                }
                            );

        } else {
            this.projectCreateError = true;
            // Show Error Tooltip of popup
        }

        
    }

    updateProject() {

        this.updateSub = this.projectService.updateProject(3, "dragon")
                            .subscribe(
                                data => {
                                    console.log("DONE");
                                }
                            );

    }

    onCancel(): void {
        this.dialogRef.close();
    }

}
