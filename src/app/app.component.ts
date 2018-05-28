import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProjectService } from './project/project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'app';
    projectList = undefined;
    selectedProject = undefined; // remove from here, move to ProjectService
    projectServiceSub = undefined;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectServiceSub = this.projectService.getProjectList()
                                        .subscribe(
                                            data => {
                                                this.projectList = data;
                                                this.projectService.selectedProject = this.projectList[0];
                                                this.selectedProject = this.projectService.selectedProject;
                                            },
                                            error => console.log(error),
                                            () => {
                                                console.log('completed');
                                            }
                                        );
                                        
        // not working from here, find out why
        // this.selectedProject = this.projectList[0]; 
    }

    ngOnDestroy() {
        this.projectServiceSub.unsubscribe();
    }

    updateSelectedProject(project) {
        this.selectedProject = project;
        this.projectService.selectedProject = project;
    }
}
