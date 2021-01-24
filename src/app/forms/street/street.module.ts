import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { StreetComponent } from './data-component/street.component';
import { StreetEditComponent  } from './edit-component/street-edit.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule],
    declarations: [ StreetComponent,StreetEditComponent],
    entryComponents: [ StreetComponent,StreetEditComponent],
    exports: [ StreetComponent] 
})
export class StreetModule { }