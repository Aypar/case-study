import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/api/authentication.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
