import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoadingComponent} from './loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [LoadingComponent]
})
export class SharedComponentsModule {

}
