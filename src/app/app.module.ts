import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
          pathMatch:'full'
        },
        {
          path: 'auth',
          loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
        },
        {
          path: 'app',
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
