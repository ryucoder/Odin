import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

    id = undefined;
    projectServiceSub = undefined;

    constructor(public projectService: ProjectService,
        public route: ActivatedRoute) { 

        }

        ngOnInit() {
            this.route.paramMap
                .subscribe(
                    data => {
                        
                        this.id = data["params"]["id"]
                        this.projectServiceSub = this.projectService.getProjectDetail(this.id)
                                                .subscribe(
                                                    data => {
                                                        this.projectService.selectedProject = data;
                                                    },

                                                    error => {
                                                        console.log(error);
                                                    },

                                                    () => {
                                                        console.log("completed");
                                                    }
                                                );
                    }
                );
                
        
        }

        ngOnDestroy() {
            this.projectServiceSub.unsubscribe();
        }
}
