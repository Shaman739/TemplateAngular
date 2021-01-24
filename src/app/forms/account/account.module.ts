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

@NgModule({
    imports:      [ BrowserModule, FormsModule,HttpClientModule,GridModule,MatButtonModule,MatDialogModule,FlatModule],
    declarations: [ LoginComponent,RegistrationComponent],
    entryComponents: [ LoginComponent,RegistrationComponent],
    exports: [ LoginComponent,RegistrationComponent] 
})
export class AccountModule { }