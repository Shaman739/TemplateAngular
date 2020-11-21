import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridComponent }   from './grid.component';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
    imports:      [ BrowserModule, FormsModule, MatTableModule,MatPaginatorModule ],
    declarations: [ GridComponent ],
    exports: [ GridComponent, MatPaginatorModule ]
})
export class GridModule { }