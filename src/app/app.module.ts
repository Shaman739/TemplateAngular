import { NgModule }      from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent }   from './app.component';
import { GridModule }   from './core/component/grid/grid.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule }   from './common/common.module';

import { HouseModule }   from './forms/house/house.module';
import { StreetModule }   from './forms/street/street.module';
import { AccountModule } from './forms/account/account.module';
import { FlatModule }   from './forms/flat/flat.module';
import { ErrorDialogComponent } from './core/http/error-dialog.component';
import { AboutModule } from './forms/about/about.module';
import { ActionsCommandsModule } from './core/component/command/actions-commands.module';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './forms/about/about.component';
import { HouseComponent } from './forms/house/data-grid-component/house.component';
import { StreetComponent } from './forms/street/data-component/street.component';
import { LoginComponent } from './forms/account/login/edit-component/login-edit.component';
import { RegistrationComponent } from './forms/account/registration/edit-component/registration-edit.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProfileComponent } from './forms/account/profile/component/profile.component';
import {EnvironmentService,ENVIRONMENT,environment} from '../environments';


// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HouseComponent},
    { path: 'about', component: AboutComponent},
    { path: 'street', component: StreetComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'profile', component: ProfileComponent},
];

@NgModule({
    imports:      [ 
        BrowserAnimationsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        BrowserModule, 
        RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
        FormsModule, 
        HttpClientModule,
        GridModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        HouseModule,
        AboutModule,
        FlatModule,
        StreetModule,
        CommonModule,
        ActionsCommandsModule
        ],
    declarations: [ AppComponent, ErrorDialogComponent],
    bootstrap:    [ AppComponent ],
    providers: [
        { provide: ENVIRONMENT, useValue: environment },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
      ]
})
export class AppModule { }