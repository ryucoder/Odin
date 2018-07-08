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
    updateSub = undefined;

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
        let id = this.projectService.selectedProject.id;
        let name = this.projectCreateForm.controls.projectName.value;

        this.updateSub = this.projectService.updateProject(id, name)
                            .subscribe(
                                data => {                                    
                                    // show tooltip to user that project is renamed.

                                    // update selected project
                                    this.projectService.selectedProject.name = name;

                                    // update projectlist 
                                    this.projectService.updateProjectList();

                                    // close the dialog box
                                    this.createEditDialog.close();

                                    console.log("Project was renamed.");
                                }
                            );

    }

    onCancel(): void {
        this.createEditDialog.close();
    }

}
