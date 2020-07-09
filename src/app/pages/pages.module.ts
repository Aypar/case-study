import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {RouterModule} from '@angular/router';
import {SharedComponentsModule} from '../../shared-components/shared-components.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PagesComponent,
      children: [{
        path: '',
        redirectTo: 'transaction'
      },
        {
          path: 'transaction',
          loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule)
        }
      ]
    }]),
    SharedComponentsModule
  ]
})
export class PagesModule {
}
