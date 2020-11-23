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

import { HouseModule }   from './forms/house/house.module';
import { ErrorDialogComponent } from './core/http/error-dialog.component';
import { AboutModule } from './forms/about/about.module';

import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './forms/about/about.component';
import { HouseComponent } from './forms/house/data-component/house.component';
import { APP_BASE_HREF } from '@angular/common';
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HouseComponent},
    { path: 'about', component: AboutComponent}
];

@NgModule({
    imports:      [ 
        BrowserAnimationsModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        BrowserModule, 
        RouterModule.forRoot(appRoutes),
        FormsModule, 
        HttpClientModule,
        GridModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        HouseModule,
        AboutModule],
    declarations: [ AppComponent, ErrorDialogComponent],
    bootstrap:    [ AppComponent ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
      ]
})
export class AppModule { }