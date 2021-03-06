import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { HouseComponent } from './data-grid-component/house.component';
import { HouseEditComponent  } from './edit-component/house-edit.component'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlatModule } from '../flat/flat.module';
import { MaxValidator} from '../../core/directive/input/max-validatoe.directive';
import { HouseListComponent }  from './list-component/house-list.component';
import { HouseDataListComponent} from './data-list-component/house-data-list.component';
import { ActionsCommandsModule } from '../../core/component/command/actions-commands.module';

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule,FlatModule,ActionsCommandsModule],
    declarations: [ HouseComponent,HouseEditComponent,MaxValidator,HouseListComponent,HouseDataListComponent],
    entryComponents: [ HouseComponent,HouseEditComponent,HouseListComponent,HouseDataListComponent],
    exports: [ HouseComponent,HouseEditComponent,HouseListComponent,HouseDataListComponent] 
})
export class HouseModule { }