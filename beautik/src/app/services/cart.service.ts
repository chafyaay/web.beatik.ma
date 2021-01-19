import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];
  product: any;

  private subject = new BehaviorSubject<object>(this.cart);
  currentdata = this.subject.asObservable();

  private nbrOfSelectedArticles = new BehaviorSubject<number>(0);
  currentNbrOfSelectedArticles = this.nbrOfSelectedArticles.asObservable();

  constructor() {
    /*     let cart = AppSettings.getString('cart');
        if (cart)
          this.subject.next(JSON.parse(AppSettings.getString('cart')))
     */
  }

  updateCart(_id: number, __qnte: number) {

    /*     let cart = AppSettings.getString('cart');
        AppSettings.remove('cart');
        if (cart) {
          if (cart.length)
            this.cart = JSON.parse(cart);
          else
            this.cart.push(JSON.parse(cart));
    
          let prd = this.cart.filter(elem => elem.id == _id);
          if (prd.length) {
            this.cart.map(elem => { if (elem.id == _id) elem.qnte += __qnte })
          } else {
            this.cart.push({ id: _id, qnte: __qnte })
          }
          // render local storage
          AppSettings.setString('cart', JSON.stringify(this.cart));
    
        } else {
          this.cart.push({ id: _id, qnte: __qnte })
    
          AppSettings.setString('cart', JSON.stringify(this.cart));
    
        }
    
        this.subject.next(JSON.parse(AppSettings.getString('cart')))
     */


  }

  getNumberOfArticles(items: any[]) {
    let s = 0;
    for (let obj of items) {
      s += obj.qnte;
    }

    return s;
  }


  removeItem(id) {

  }
}
