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



}
