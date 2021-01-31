import { Action } from "@ngrx/store";

export enum ProjectActionTypes {
    UnLoad = "UNLOAD",
    GetAllProjects = "GET_ALL_PROJECTS",
    GetAllProjectsSuccess = "GET_ALL_PROJECTS_SUCCESS",
    GetAllProjectsFailed = "GET_ALL_PROJECTS_FAILED",

    UpsertCurrentProject = "UPSERT_CURRENT_PROJECT",
    UpsertCurrentProjectSuccess = "UPSERT_CURRENT_PROJECT_SUCCESS",
    UpsertCurrentProjectFailed = "UPSERT_CURRENT_PROJECT_FAILED",
   
    UpsertCurrentProjectOnlySuccess = "UPSERT_CURRENT_PROJECT_ONLY_SUCCESS"


}

export class UnLoad implements Action {
    readonly type = ProjectActionTypes.UnLoad;
    constructor() { }
}

export class GetAllProjects implements Action {
    readonly type = ProjectActionTypes.GetAllProjects;
    constructor(public payload: any) { }
}
export class GetAllProjectsSuccess implements Action {
    readonly type = ProjectActionTypes.GetAllProjectsSuccess;
    constructor(public payload: any) { }
}
export class GetAllProjectsFailed implements Action {
    readonly type = ProjectActionTypes.GetAllProjectsFailed;
    constructor(public payload: any) { }
}

export class UpsertCurrentProject implements Action {
    readonly type = ProjectActionTypes.UpsertCurrentProject;
    constructor(public payload: any) { }
}
export class UpsertCurrentProjectSuccess implements Action {
    readonly type = ProjectActionTypes.UpsertCurrentProjectSuccess;
    constructor(public payload: any) { }
}
export class UpsertCurrentProjectOnlySuccess implements Action {
    readonly type = ProjectActionTypes.UpsertCurrentProjectOnlySuccess;
    constructor(public payload: any) { }
}

export class UpsertCurrentProjectFailed implements Action {
    readonly type = ProjectActionTypes.UpsertCurrentProjectFailed;
    constructor(public payload: any) { }
}



export type ProjectActions =
    | UnLoad
    | GetAllProjects
    | GetAllProjectsSuccess
    | GetAllProjectsFailed
    | UpsertCurrentProject
    | UpsertCurrentProjectSuccess
    | UpsertCurrentProjectFailed
    | UpsertCurrentProjectOnlySuccess