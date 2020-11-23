import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AboutComponent } from './about.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AboutComponent],
    exports: [ AboutComponent] 
})
export class AboutModule { }