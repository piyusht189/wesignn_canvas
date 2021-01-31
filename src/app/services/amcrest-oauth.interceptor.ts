import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from "@angular/common/http";
import * as CommonActions from "../actions/common.action";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";

import * as RootReducer from "../app.reducers";
import { tap, catchError, timeout } from 'rxjs/operators';
import { notifyService } from './snotify';
import { Router } from '@angular/router';

@Injectable()
export class AmcrestOAuthInterceptor implements HttpInterceptor {
  private token: string;

  constructor(public store: Store<RootReducer.State>, public notify: notifyService, public router: Router, public http: HttpClient, public rootstore: Store<RootReducer.State>) {
    store
      .select(state => state.common.token)
      .subscribe(token => (this.token = token));
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available

    if(!this.checkExclude(request.url)){
      if (this.token) {
        request = request.clone({
          setHeaders: {
            Authorization: "JWT " + this.token
          }
        });
      }
    }

  
    const timeoutValueNumeric = Number(180000);
    return next.handle(request).pipe(timeout(timeoutValueNumeric)).pipe(
      tap(evt => { }),
      catchError((err: any) => {
          if (err instanceof HttpErrorResponse) {
              try {
                  if (err.status == 401) {
                      this.rootstore.dispatch(new CommonActions.LogoutRequestSuccess({}));
                      this.router.navigate(["login/ended"]);
                  }
              } catch (e) {
                  this.rootstore.dispatch(new CommonActions.LogoutRequestSuccess({}));
                  this.router.navigate(["login/ended"]);
              }
          }
          return of(err);
      }));
  }
  checkExclude(url){
    return url.includes('https://api.mailpod.com/info/faq') || 
           url.includes('https://api.mailpod.com/info/subscription/plan') ||
           url.includes('https://api.importkey.com/info/countries/list') ||
           url.includes('https://api.mailpod.com/info/timezones') ||
           url.includes('https://api.mailpod.com/auth/register') ||
           url.includes('https://api.mailpod.com/auth/login') ||
           url.includes('https://api.mailpod.com/marketing/complaints') ||
           url.includes('https://api.mailpod.com/auth/forgot/change/password') ||
           url.includes('https://api.mailpod.com/auth/subscription/cancel') ||
           url.includes('https://api.mailpod.com/auth/subscription/reactivate') ||
           url.includes('https://api.mailpod.com/auth/subscription/update') ||
           url.includes('https://api.mailpod.com/marketing/public/signupform/') ||
           url.includes('https://api.mailpod.com/auth/resend/account/verification/') ||
           url.includes('https://api.mailpod.com/auth/subscription/details/') ||
           url.includes('https://api.mailpod.com/marketing/project/name/') ||
           url.includes('https://api.mailpod.com/marketing/unsubscribe/list/') ||
           url.includes('https://api.mailpod.com/auth/account/verification/') ||
           url.includes('https://api.mailpod.com/marketing/verify/subscriber/')
  }
}
