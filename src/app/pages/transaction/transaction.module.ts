import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransactionComponent} from './transaction.component';
import {RouterModule} from '@angular/router';
import {TransactionReportComponent} from './transaction-report/transaction-report.component';
import {TransactionListComponent} from './transaction-list/transaction-list.component';
import {TransactionDetailComponent} from './transaction-detail/transaction-detail.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule} from '@angular/forms';
import {ModalModule} from 'ngx-bootstrap/modal';

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
            path: '',
            redirectTo: 'list'
          },
          {
            path: 'list',
            component: TransactionListComponent
          },
          {
            path: 'detail/:id',
            component: TransactionDetailComponent
          },
          {
            path: 'report',
            component: TransactionReportComponent
          }
        ]
      }
    ]),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ModalModule,

  ]
})
export class TransactionModule {
}
