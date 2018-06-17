import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    selectedProject = undefined;
    // selectedProject = {
    //     "id": 1,
    //     "name": "Odin",
    //     "created": "2018-05-27T06:59:22.886644Z"
    // }; // shared across all the modules
    
    project_list_url = "api/project/list";
    project_detail_url = "api/project/detail";
    project_update_url = "api/project/update";
    
    // projectList = [
    //     {
    //         "id": 1,
    //         "name": "Odin",
    //         "created": "2018-05-27T06:59:22.886644Z"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Ryu",
    //         "created": "2018-05-27T18:35:59.997639Z"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Angular",
    //         "created": "2018-05-27T18:36:10.555232Z"
    //     },
    // ]; // dummt data for testing


    constructor(private http: HttpClient) { }

    getProjectList() {
        
        // return this.projectList;
        // return this.http.get(this.project_list_url);
        return this.http.get(this.project_list_url + "/");
    } 

    getProjectDetail(id) {
        return this.http.get(this.project_detail_url + "/" + id + "/");
    }

    renameProject(id, name) {
        return this.http.put(this.project_update_url + id, {name: name });
    }
}
