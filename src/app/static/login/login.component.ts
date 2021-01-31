import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as RootReducer from "../../app.reducers";
import * as CommonActions from "../../actions/common.action";
import { map } from 'rxjs/operators';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpClient } from '@angular/common/http';
import { notifyService } from 'src/app/services/snotify';
import { NgxSpinnerService } from 'ngx-spinner';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit, OnDestroy {
  submitted = false;
  submitted1 = false;
  email
  password

  femail
  showpassword = false
  forgotmode = false
  @ViewChild('mulogin') mylogin: any;
  constructor(
    private title: Title, 
    private cd: ChangeDetectorRef,
    private meta: Meta,
    public router: Router,private route: ActivatedRoute,
    public rootstore: Store<RootReducer.State>,public ngxSmartModalService: NgxSmartModalService, public http: HttpClient, public notify: notifyService, public spinner: NgxSpinnerService
  ) { 
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=1.0' });
    this.meta.updateTag({ name: 'description', content: 'Welcome back to Mailpod. Sign in to enhance your business.' })
    this.meta.updateTag({ name: 'title', content: 'Login | Mailpod | Email marketing tool' });
    this.title.setTitle('Login | Mailpod | Email marketing tool');
  }
  ngOnInit() {

    $(() => {
      $('.rmiform').on('change keyup', '.rmfield', function(){    
        if ($(this).val().length === 0) {
          $(this).removeClass('not_empty');
          $(this).addClass('is_empty');
        }
        else {
          $(this).removeClass('is_empty');
          $(this).addClass('not_empty');
        }
        
      });
    });

    this.route.paramMap.subscribe(params => {
      if (params["params"]['ended'] == 'ended') {
        this.spinner.hide();
        this.notify.onWarning("Session Expired!", 'Please login again.');
      }
      if (params["params"]["email"] && params["params"]["password"]) {
        var auto_pass = atob(params["params"]["password"]);
        var auto_email = params["params"]["email"];
        if(auto_email && auto_pass){
          this.rootstore.dispatch(
            new CommonActions.LoginRequest({
                email: auto_email,
                password: auto_pass
            })
        ); 
        }
      }
    });
  }
  ngOnDestroy() {
    this.meta.updateTag({ name: 'viewport', content: 'width=1636' });
    this.meta.updateTag({ name: 'description', content: 'The Best Email marketing tool for all type of business. It provides simple and easy build-up for any type of email. Click to know more about Mailpod.' })
    this.meta.updateTag({ name: 'title', content: 'Best Email marketing tool for Small and Medium business' });
    this.title.setTitle('Best Email marketing tool for Small and Medium business');
  } 
  openHome(){
    this.router.navigate(['/']);
  }
  login(){
    this.submitted = true;
    if(this.email && this.password){
      this.rootstore.dispatch(
        new CommonActions.LoginRequest({
            email: this.email.trim(),
            password: this.password.trim()
        })
    );
    }
  }
  reset(){
    this.submitted1 = true;
    if(this.femail){
      this.submitted1 = true;
      this.spinner.show();
      this.http.get('https://api.mailpod.com/auth/forgot/password/' + this.femail).pipe(map(data => {
        this.spinner.hide();
      if (data['status_code'] === 200) {
        this.notify.onSuccess("Done", data['message']);
        this.forgotmode = false;
      }else{
        this.notify.onError("Error", data['message']);
      }   
      })).subscribe(result => {
      });
    }
  }

}
