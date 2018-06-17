import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    selectedProject = undefined;
    
    project_create_url = "api/project/create";
    project_list_url = "api/project/list";
    project_detail_url = "api/project/detail";
    project_update_url = "api/project/update";
    
    constructor(private http: HttpClient) { }

    createProject(name) {
        return this.http.post(this.project_create_url + "/", { name: name });
    }

    getProjectList() {
        return this.http.get(this.project_list_url + "/");
    } 

    getProjectDetail(id) {
        return this.http.get(this.project_detail_url + "/" + id + "/");
    }

    renameProject(id, name) {
        return this.http.put(this.project_update_url + id, { name: name });
    }
}
