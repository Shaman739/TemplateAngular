import { Component, Inject } from '@angular/core';

import { HttpService } from '../../../../core/http';
import { Login } from '../../../../core/session'; 

import { HttpMessageShow } from '../../../../core/http/http-message-show'; 
import { AuthorizeService } from '../../../../core/session/authorize.service';
import { Router } from '@angular/router';
@Component({
    selector: 'login-edit-comp',
    templateUrl: 'login-edit.component.html',
    providers: [HttpService, HttpMessageShow]
  })
  export class LoginComponent {

    item:Login = new Login();
    constructor(private authorizeService:AuthorizeService,private router: Router) {  }

    close()
    {
      this.router.navigate(['/'], );
    }
    
    ok()
    {
     this.authorizeService.login(this.item).subscribe(data =>{
       if(data && data.isAuthorize == true)
          this.router.navigate(['/'], );
     });
     
    }
    
    registration()
    {
      this.router.navigate(['/registration'], );
    }

}