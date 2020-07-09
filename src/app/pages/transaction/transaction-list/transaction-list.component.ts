import {Component, OnInit} from '@angular/core';
import {TransactionQueryResponseModel} from '../../../../models/transaction/transaction-query.response.model';
import {TransactionService} from '../../../../services/api/transaction.service';
import * as moment from 'moment';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactionQueryResponse: TransactionQueryResponseModel = {};
  filter: any = {
    fromDate: moment().add(-3, 'year').toDate(),
    toDate: moment().toDate()
  };

  constructor(private transactionService: TransactionService, private toastrService: ToastrService) {
  }

  ngOnInit(): void {
    this.getTransactionList();
  }

  getTransactionList() {
    this.transactionService.query(this.getQuery()).then((response) => {
      this.transactionQueryResponse = response.data;
    }).catch(error => {
      this.toastrService.error(error);
    });
  }

  nextPage() {
    this.transactionService.paginate(this.getQuery(), this.transactionQueryResponse.next_page_url).then((response) => {
      this.transactionQueryResponse = response.data;
    });
  }

  prevPage() {
    this.transactionService.paginate(this.getQuery(), this.transactionQueryResponse.prev_page_url).then((response) => {
      this.transactionQueryResponse = response.data;
    });
  }

  getQuery() {
    Object.keys(this.filter).forEach(key => {
      if (this.filter[key] === 'undefined') {
        delete this.filter[key];
      }
    });
    let query = JSON.parse(JSON.stringify(this.filter));
    query.fromDate = moment(query.fromDate).format('YYYY-MM-DD');
    query.toDate = moment(query.toDate).format('YYYY-MM-DD');
    return query;
  }
}
