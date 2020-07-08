import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from '../guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'auth',
          pathMatch: 'full'
        },
        {
          path: 'auth',
          loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
        },
        {
          path: 'app',
          canActivate: [AuthGuard],
          loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
        }


      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
