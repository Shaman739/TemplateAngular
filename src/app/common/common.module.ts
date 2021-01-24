import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TopSideComponent } from './top-side/top-side.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,MatButtonModule,MatDialogModule],
    declarations: [ TopSideComponent],
    exports: [ TopSideComponent] 
})
export class CommonModule { }