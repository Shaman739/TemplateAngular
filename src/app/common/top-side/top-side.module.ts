import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { TopSideComponent } from './top-side.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MaxValidator} from '../../core/directive/input/max-validatoe.directive';
import {Routes, RouterModule} from '@angular/router';
// определение маршрутов
/*const appRoutes: Routes =[
    { path: '', component: HouseComponent},
    { path: 'about', component: AboutComponent},
    { path: 'street', component: StreetComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
];
*/
@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule],
    declarations: [ TopSideComponent,MaxValidator],
    entryComponents: [ TopSideComponent],
    exports: [ TopSideComponent] 
})
export class TopSideModule { }