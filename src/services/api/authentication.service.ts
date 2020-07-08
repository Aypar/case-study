import {Injectable} from '@angular/core';
import {AuthenticationRequestModel} from '../../models/authentication/authentication.request.model';
import {AuthenticationResponseModel} from '../../models/authentication/authentication.response.model';
import {ApiService} from './api.service';
import {StorageService} from '../storage.service';
import {Router} from '@angular/router';
import {AxiosError, AxiosResponse} from 'axios';

@Injectable({providedIn: 'root'})

export class AuthenticationService {

  constructor(private apiService: ApiService, private storageService: StorageService, private router: Router) {
  }


  login(authenticationRequestModel: AuthenticationRequestModel): Promise<boolean>{
    return this.apiService.post<AuthenticationResponseModel>('merchant/user/login', authenticationRequestModel)
      .setUseToken(false)
      .execute()
      .then((response) => {
        if (response.status === 200) {
          this.storageService.setToken(response.data.token);
          return true;
        } else {
          return false;
        }
      })
      .catch((error) => {
        return error;
      });

  }

  logout() {
    this.storageService.removeToken();
    this.router.navigate(['auth/login']);
  }
}
