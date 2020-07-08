import {Component} from '@angular/core';
import {AuthenticationRequestModel} from '../models/authentication/authentication.request.model';
import {AuthenticationService} from '../services/api/authentication.service';
import {TransactionService} from '../services/api/transaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'casestudy';
  authModel: AuthenticationRequestModel = {email: '', password: ''};

  constructor(private auth: AuthenticationService, private trans: TransactionService) {
  }

  click() {
    this.auth.login(this.authModel).then(() => {

    });
  }

  get() {
    this.trans.report({
      fromDate: '2015-07-01' as any,
      toDate: '2015-10-01' as any,
      merchant: 1,
      acquirer: 1
    }).then((response) => {

    });
  }
}
