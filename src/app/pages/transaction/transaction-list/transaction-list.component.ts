import {Component, OnInit} from '@angular/core';
import {TransactionQueryResponseModel} from '../../../../models/transaction/transaction-query.response.model';
import {TransactionService} from '../../../../services/api/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactionQueryResponse: TransactionQueryResponseModel = {};

  constructor(private transactionService: TransactionService) {
  }

  ngOnInit(): void {
    this.getTransactionList();
  }

  private getTransactionList() {
    this.transactionService.query({}).then(response => {
      debugger
      this.transactionQueryResponse = response.data;
    });
  }

}
