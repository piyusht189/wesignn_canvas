import { ProjectActions, ProjectActionTypes } from "./../actions/project";
const initialState = [];

export function reducer(state = initialState, action: ProjectActions): any {
    switch (action.type) {
        case ProjectActionTypes.GetAllProjectsSuccess:
            return action["payload"];
        case ProjectActionTypes.UnLoad:
            return initialState;
        default:
            return state;
    }
}
