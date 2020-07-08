import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionComponent} from './transaction.component';
import {RouterModule} from '@angular/router';
import {TransactionReportComponent} from './transaction-report/transaction-report.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component';


@NgModule({
  declarations: [TransactionComponent, TransactionReportComponent, TransactionListComponent, TransactionDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TransactionComponent,
        children: [
          {
            path:'',
            redirectTo:'list'
          },
          {
            path: 'list',
            component: TransactionListComponent
          },
          {
            path: 'detail',
            component: TransactionDetailComponent
          },
          {
            path: 'report',
            component: TransactionReportComponent
          }
        ]
      }
    ])
  ]
})
export class TransactionModule {
}
