import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
import { do, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    selectedProject = undefined;
    
    project_create_url = 'api/project/create';
    project_list_url = 'api/project/list';
    project_detail_url = 'api/project/detail';
    project_update_url = 'api/project/update';
    project_delete_url = 'api/project/delete';
    
    constructor(private http: HttpClient) { }

    createProject(name): Observable<any> {
        return this.http.post(this.project_create_url + '/', { name: name });
    }


    getProjectList() {
        return this.http.get(this.project_list_url + '/' + "324")
            .pipe(
                retry(2),
                catchError(
                    (err) => {
                        // if (err.msg) {
                        //     throw err.msg;
                        // }

                        return Observable.throw(err);
                    }
                )
            );
    } 

    getProjectDetail(id) {
        return this.http.get(this.project_detail_url + '/' + id + '/');
    }

    updateProject(id, name) {
        return this.http.put(this.project_update_url + '/' + id + '/', { name: name });
    }

    deleteProject(id) {
        return this.http.delete(this.project_delete_url + '/' + id + '/');
    }
}
