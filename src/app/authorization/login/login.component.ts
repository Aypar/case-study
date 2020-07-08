import {Component, OnInit} from '@angular/core';
import {AuthenticationRequestModel} from '../../../models/authentication/authentication.request.model';
import {AuthenticationService} from '../../../services/api/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authModel: AuthenticationRequestModel = {email: null, password: null};

  constructor(private authenticationService: AuthenticationService,private router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authenticationService.login(this.authModel).then(response => {
      debugger
      if(response){
        this.router.navigate(['app/transaction'])
      }
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  }
}
