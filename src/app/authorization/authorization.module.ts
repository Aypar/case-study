import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorizationComponent} from './authorization.component';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AuthorizationComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthorizationComponent,
        children: [
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          },
          {
            path: 'login',
            component: LoginComponent
          }
        ]
      }
    ]),
    FormsModule
  ]
})
export class AuthorizationModule {
}
