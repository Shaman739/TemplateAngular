import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { GridModule }   from '../../core/component/grid/grid.module';
import { HttpClientModule }   from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlatModule } from '../flat/flat.module';
import { LoginComponent } from './login/edit-component/login-edit.component';
import { RegistrationComponent } from './registration/edit-component/registration-edit.component';
import { ProfileComponent } from './profile/component/profile.component';
import { HouseModule }   from '../../forms/house/house.module';
@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule,FlatModule, HouseModule],
    declarations: [ LoginComponent,RegistrationComponent,ProfileComponent],
    entryComponents: [ LoginComponent,RegistrationComponent,ProfileComponent],
    exports: [ LoginComponent,RegistrationComponent, ProfileComponent] 
})
export class AccountModule { }