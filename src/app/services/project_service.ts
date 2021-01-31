import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Store } from "@ngrx/store";
import * as RootReducer from "../app.reducers";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CommonActions from "../actions/common.action";
import { AmcrestHttpService } from './amcrest-http.service';
var company_name = null;
@Injectable()
export class ProjectService {
    user_id;
    email;
    customer_id
    constructor(
        public httpService: AmcrestHttpService,
        public rootstore: Store<RootReducer.State>,
        private _http: HttpClient
    ) {
        rootstore
            .select(state => state.common.user)
            .subscribe(userObj => {
                if (userObj) {
                    if (userObj["id"] || userObj["id"] == 0) {
                        this.user_id = userObj["id"];
                    }
                    if (userObj["email"]) {
                        this.email = userObj["email"];
                    }
                    if (userObj["customer_id"]) {
                        this.customer_id = '' + userObj["customer_id"];
                    }
                }
            });
    }
    public getAllProjects(obj): Observable<any> {
        return this.httpService.httpGet("marketing/project?user="+ obj.id).pipe(
            map(response => {
                if (!response._failed) {
                    response._result = response.response;
                }
                return response;
            })
        );
    }

    public UpsertCurrentProject(obj): Observable<any> {
        return this.httpService.httpGet("marketing/project/mark/default/"+ obj.project_id +"/"+ obj.id).pipe(
            map(response => {
                if (!response._failed) {
                    response._result = response.response;
                }
                if(obj['url']){
                    response['url'] = obj['url'];
                }
                if(obj['url1']){
                    response['url1'] = obj['url1'];
                }
                if(obj['reload']){
                    response['reload'] = obj['reload'];
                }
                return response;
            })
        );
    }
   

    checkLogout(val) {
        if (val) {
            if (val === 800) {
                //Logout
                this.rootstore.dispatch(new CommonActions.LogoutRequest({}));
            }
        }
    }





}
