import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from '../../../../services/api/transaction.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {TransactionGetResponseModel} from '../../../../models/transaction/transaction-get.response.model';
import {ClientService} from '../../../../services/api/client.service';
import {ClientGetResponseModel} from '../../../../models/client/client-get.response.model';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit, OnDestroy {

  @ViewChild(ModalDirective)
  clientDetailModal: ModalDirective;
  subscriptions: Array<Subscription> = [];
  transactionResponseModel: TransactionGetResponseModel;
  clientResponseModel: ClientGetResponseModel;

  constructor(private transactionService: TransactionService,
              private clientService: ClientService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptions.push(this.activatedRoute.params.subscribe((params) => {
      this.getTransaction(params.id);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getTransaction(transactionId: string) {
    this.transactionService.get({transactionId}).then(response => {
      this.transactionResponseModel = response.data;
    });
  }

  getClientDetail(transactionId: string) {
    this.clientService.get({transactionId}).then(response => {
      this.clientResponseModel = response.data;
      this.clientDetailModal.show();
    });
  }
}
