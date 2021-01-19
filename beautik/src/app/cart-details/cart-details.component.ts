import { RouterExtensions } from '@nativescript/angular';

import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { appData } from '../data';
import { elementAt } from 'rxjs/operators';
import { AnimationCurve } from '@nativescript/core/ui/enums';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  productInfo: any[] = [];
  appData = appData.productList;
  cart: any;
  nbrArt = 0;
  total = 0;

  constructor(
    private cartService: CartService,
    private route: RouterExtensions
  ) { }

  ngOnInit(): void {
    this.total = 0;
    this.productInfo = [];
    this.cartService.currentdata.subscribe((data: any[]) => {

      data.map((item: any) => {
        const id = item.id;
        const prd = this.appData.filter((elem: any) => elem.id == id)[0];
        if (prd.id == id) {
          this.productInfo[id] = { ...prd, _qnte: item.qnte }
          if (prd.discount > 0) {
            this.total += (prd.price * prd.discount * .01 * item.qnte)
          } else {
            this.total += (prd.price * item.qnte)
          }
        }

        console.log(this.productInfo);


        /// const prd = this.appData.filter((elem: any) => elem.id == item.id)[0];
        /// this.productInfo.push({ id: prd.id, productname: prd.productname, _qnte: item.qnte });
      })

    });
  }



  crement(id: any, qnte: number) {
    this.nbrArt = qnte + 1;
    if (this.productInfo[id].qnte >= this.nbrArt) {
      this.productInfo[id]._qnte = this.nbrArt;
      this.cartService.updateCart(id, 1)
    }
    else return;
  }

  decrement(id: any, qnte: number) {

    if (this.nbrArt <= 1 || this.productInfo[id].qnte <= 1) return;
    else
      this.nbrArt = qnte - 1;

    this.productInfo[id]._qnte = this.nbrArt;
    this.cartService.updateCart(id, -1)
    this.cartService.currentdata.subscribe(data => {

    });
  }

  shipping() {

    this.route.navigate(['/shipping'],
      {
        animated: true,
        transition:
        {
          name: 'slide',
          duration: 500,
          curve: AnimationCurve.easeInOut
        }
      }
    );
  }

}
