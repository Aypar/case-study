import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  onShow: EventEmitter<any> = new EventEmitter<any>();
  onHide: EventEmitter<any> = new EventEmitter<any>();

  show() {
    this.onShow.emit();
  }

  hide() {
    this.onHide.emit();
  }

}
