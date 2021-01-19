import { CartService } from './../../services/cart.service';
import { BeforeCheckoutComponent } from './../before-checkout/before-checkout.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewContainerRef } from '@angular/core';

import { ModalDialogService, ModalDialogOptions } from '@nativescript/angular';
import { setString } from '@nativescript/core/application-settings';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnChanges {
  @Output() updateCart: EventEmitter<any> = new EventEmitter();
  @Input() productInfo: any;
  @Input() qnte: number;
  isEnabled = false;
  nbrArticle;

  constructor(
    private _modalService: ModalDialogService,
    private _vcRef: ViewContainerRef,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.nbrArticle = 0;
  }

  ngOnChanges() {
    this.isEnabled = this.productInfo._qnte > 0;
    this.nbrArticle = this.qnte || 0;
  }





  addToCart() {
    this.cartService.updateCart(this.productInfo.id, this.nbrArticle)
    this.isEnabled = false;
    this.updateCart.emit();
    this.nbrArticle = 0
    /* .subscribe(data => {
      console.log('data')
      console.log(AppSettings.getString('cart'))
    }) */
  }



  increment() {
    if (this.nbrArticle > this.productInfo.qnte) return;
    else {
      this.nbrArticle++;
      this.isEnabled = true;
      //this.emitNbrArticleHandler.emit(this.nbrArticle);
    }
  }

  decrement() {
    if (this.nbrArticle <= 0) { this.isEnabled = false; return }
    else {
      this.nbrArticle--;
      this.isEnabled = true;
      //this.emitNbrArticleHandler.emit(this.nbrArticle);
    }
  }

  showModal(): void {
    const options: ModalDialogOptions = {
      viewContainerRef: this._vcRef,
      context: {},
      fullscreen: true
    };


    this._modalService.showModal(BeforeCheckoutComponent, options)
      .then((result: string) => {
        console.log(result);
      });
  }

}
