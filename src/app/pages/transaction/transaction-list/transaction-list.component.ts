import {Component, OnInit} from '@angular/core';
import {TransactionQueryResponseModel} from '../../../../models/transaction/transaction-query.response.model';
import {TransactionService} from '../../../../services/api/transaction.service';
import * as moment from 'moment';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactionQueryResponse: TransactionQueryResponseModel = {};
  filter: any = {
    fromDate: moment().add(-7, 'day').toDate(),
    toDate: moment().toDate()
  };

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.getTransactionList();
  }

  getTransactionList() {
    this.transactionService.query({
      fromDate: moment(this.filter.fromDate).format('YYYY-MM-DD'),
      toDate: moment(this.filter.toDate).format('YYYY-MM-DD')
    }).then((response) => {

    }).catch(() => {

    });
  }

}
