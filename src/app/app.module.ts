import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTES } from "./app.routes";
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { appReducers, metaReducers } from "./app.reducers";
import { EFFECTS } from "./app.effects";
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouteGuardService } from './services/route-guard.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AmcrestOAuthInterceptor } from './services/amcrest-oauth.interceptor';
import { ToastDefaults, SnotifyService, SnotifyModule } from 'ng-snotify';
import { notifyService } from './services/snotify';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { ProjectService } from './services/project_service';
import { AmcrestHttpService } from './services/amcrest-http.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StorageServiceModule } from "angular-webstorage-service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { TooltipModule } from 'ng2-tooltip-directive';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha';
import { FileSaverModule } from 'ngx-filesaver';
import { SortablejsModule } from 'ngx-sortablejs';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {AccordionModule} from "ngx-accordion";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatExpansionModule } from '@angular/material/expansion'
import { LoginComponent } from './static/login/login.component';
import { HomeComponent } from './static/home/home.component';
import { TestCanvasComponent } from './dynamic/components/test-canvas/test-canvas.component';
import { WebViewerComponent } from './webviewer/webviewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

//import { UploadBottomSheetDialogComponent } from 'ip-email-builder/lib/components/upload-bottom-sheet-dialog/upload-bottom-sheet-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TestCanvasComponent,
    WebViewerComponent
    //UploadBottomSheetDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SnotifyModule,
    HttpClientModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    PdfViewerModule,    
    CommonModule,
    NgxPaginationModule,
    MatTooltipModule,
    PasswordStrengthMeterModule,
    UiSwitchModule,
    UiSwitchModule,
    TooltipModule,
    FileSaverModule,
    AccordionModule,
    DragDropModule,
    MatListModule,
    MatExpansionModule,
    NgMultiSelectDropDownModule.forRoot(),
    SortablejsModule.forRoot({ animation: 150 }),
    NgxSmartModalModule.forRoot(),
    EffectsModule.forRoot(EFFECTS),
    StoreModule.forRoot(appReducers),
    RouterModule.forRoot(ROUTES, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
     }),
    StoreDevtoolsModule.instrument({
      name: "Amcrest NgRx Store DevTools",
      maxAge: 100,
      logOnly: environment.production
  }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  entryComponents:[],
  providers: [
    RouteGuardService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AmcrestOAuthInterceptor,
            multi: true
        },
        {
          provide: RECAPTCHA_SETTINGS,
          useValue: {
              siteKey: '6Lelke0UAAAAADpMO4cQk2GUiXOeZ1-6umTEgGDE',
          } as RecaptchaSettings,
        },
        { provide: "SnotifyToastConfig", useValue: ToastDefaults },
        SnotifyService,
        notifyService,
        AuthenticationService,
        UserService,
        ProjectService,
        AmcrestHttpService,
        AsyncPipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
