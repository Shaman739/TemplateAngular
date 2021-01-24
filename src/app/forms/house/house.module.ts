import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { HouseComponent } from './data-component/house.component';
import { HouseEditComponent  } from './edit-component/house-edit.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlatModule } from '../flat/flat.module';
import { MaxValidator} from '../../core/directive/input/max-validatoe.directive';

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule,FlatModule],
    declarations: [ HouseComponent,HouseEditComponent,MaxValidator],
    entryComponents: [ HouseComponent,HouseEditComponent],
    exports: [ HouseComponent,HouseEditComponent] 
})
export class HouseModule { }