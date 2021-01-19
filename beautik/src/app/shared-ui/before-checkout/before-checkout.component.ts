import { Component, OnInit } from '@angular/core';
//import * as AppSettings  from '@nativescript/core/application-settings';

@Component({
  selector: 'app-before-checkout',
  templateUrl: './before-checkout.component.html',
  styleUrls: ['./before-checkout.component.scss']
})
export class BeforeCheckoutComponent implements OnInit {
  qnte = 0;
  constructor() { }
  productInfo: any;

  ngOnInit(): void {
    // this.productInfo = JSON.parse(AppSettings.getString('cart'));
    this.qnte = this.productInfo._qnte;
  }
  checkout() {

    console.log(this.productInfo)
  }

  decrement() {
    if (this.qnte <= 0) return
    else
      this.qnte--;
  }

  increment() {
    if (this.qnte >= this.productInfo.qnte) return
    else
      this.qnte++;
  }

  remove() {

  }

  call() {

  }
  order() {

  }
}
