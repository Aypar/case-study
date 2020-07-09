import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from '../../../../services/api/transaction.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {TransactionGetResponseModel} from '../../../../models/transaction/transaction-get.response.model';
import {ClientService} from '../../../../services/api/client.service';
import {ClientGetResponseModel} from '../../../../models/client/client-get.response.model';
import {ModalDirective} from 'ngx-bootstrap/modal';
import {LoadingService} from '../../../../services/loading-service';

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
              private loadingService: LoadingService,
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
    this.loadingService.show();
    this.transactionService.get({transactionId}).then(response => {
      this.transactionResponseModel = response.data;
    }).finally(() => {
      this.loadingService.hide();
    });
  }

  getClientDetail(transactionId: string) {
    this.loadingService.show();
    this.clientService.get({transactionId}).then(response => {
      this.clientResponseModel = response.data;
      this.clientDetailModal.show();
    }).finally(() => {
      this.loadingService.hide();
    });
  }
}
