import {Component} from '@angular/core';
import {LoadingService} from '../../services/loading-service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})

export class LoadingComponent {
  visible = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.onShow.subscribe(() => {
      this.show();
    });
    this.loadingService.onHide.subscribe(() => {
      this.hide();
    });
  }

  show() {
    this.visible = true;
  }

  hide() {
    this.visible = false;
  }

}
