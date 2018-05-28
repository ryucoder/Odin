import { Component, OnInit, OnDestroy } from '@angular/core';

import { ProjectService } from "../project.service";


@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {
    
    projectList = undefined;
    projectServiceSub;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectServiceSub = this.projectService.getProjectList();
        this.projectList = this.projectServiceSub;
    //                                     .subscribe(
    //                                         data => this.projectList = data,
    //                                         error => console.log(error),
    //                                         () => {
    //                                             console.log('completed');
    //                                         }
    //                                     );

    }

    ngOnDestroy() {
        this.projectServiceSub.unsubscribe();
    }

}
