import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { HouseComponent, HouseEditForm } from './house.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule],
    declarations: [ HouseComponent,HouseEditForm],
    entryComponents: [ HouseComponent,HouseEditForm],
    exports: [ HouseComponent,HouseEditForm] 
})
export class HouseModule { }