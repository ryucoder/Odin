import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-rename-dialog',
  templateUrl: './project-rename-dialog.component.html',
  styleUrls: ['./project-rename-dialog.component.css']
})
export class ProjectRenameDialogComponent implements OnInit, OnDestroy {

    createSub = undefined;
    updateSub = undefined;s

    projectCreateForm = undefined;

    constructor(private projectService: ProjectService,
        private formBuilder: FormBuilder,
        public createEditDialog: MatDialogRef<ProjectRenameDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }
        
    ngOnInit() {
        
        this.projectCreateForm = this.formBuilder.group({
            projectName: [{ value: "", disabled: false}, []]
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
                                    // show tooltip to user that new project is created.
                                    this.projectService.projectList.push(data);
                                    this.createEditDialog.close();
                                },
                                error => console.log("Create Project Error : " + error),
                            );

        } else {
            // show tooltip that project creation has failed.
            // Also show the reason for failure and the steps to fix it.
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
        this.createEditDialog.close();
    }

}
