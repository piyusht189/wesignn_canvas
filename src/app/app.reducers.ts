import { storeLogger } from "ngrx-store-logger";

import { environment } from "../environments/environment";
import { Action, ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer, combineReducers, createSelector } from '@ngrx/store';
import * as fromCommon from "./reducers/common.reducer";
import { localStorageSync } from 'ngrx-store-localstorage';



import * as fromAllProject from "./reducers/mp_projects";
import * as fromCurrentProject from "./reducers/mp_current_project";

export const FEATURE_NAME = '';
const STORE_KEYS_TO_PERSIST = ['common','all_projects','current_project'];

export interface State {
    common: fromCommon.CommonState,
    all_projects: any,
    current_project: any,
    signup_forms: any,
    form_templates: any
}

export const appReducers = {
    common: fromCommon.reducer,
    all_projects: fromAllProject.reducer,
    current_project: fromCurrentProject.reducer
};
export function loggerReducer(reducer: ActionReducer<State>): any {
    // default, no options
    return storeLogger()(reducer);
}

// export const metaReducers = environment.production ? [] : [loggerReducer]
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
    return localStorageSync({
        keys: STORE_KEYS_TO_PERSIST,
        rehydrate: true,
    })(reducer);
}

export const metaReducers: Array<MetaReducer<State, Action>> = [localStorageSyncReducer];

export const getProjectDetailsState = createFeatureSelector<State>("project_details");

