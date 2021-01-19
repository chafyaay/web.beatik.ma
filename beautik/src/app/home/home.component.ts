import { CartService } from '@src/app/services/cart.service';
import { appData } from './../data';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { registerElement, RouterExtensions } from '@nativescript/angular';
import { Carousel, CarouselItem } from 'nativescript-carousel';
import { ItemEventData } from '@nativescript/core';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild("myCarousel", { static: false }) carouselView: ElementRef<Carousel>;
  cart: { id: string; qnte: string }[] = [];

  nbrArt = 0;
  showPayementButton = false;

  myTapPageEvent(args) {
  }

  myChangePageEvent(args) {
  };

  public appData = appData;

  constructor(
    private route: RouterExtensions,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    AppSettings.remove('cart');
    this.cartService.currentdata.subscribe((data: any[]) => {
      this.showPayementButton = data.length > 0;
    })
  }

  buyHandler(event: any) {

  }

  onLoaded(event: any) {

  }

  navigateToProductDetails(id: any) {
    this.route.navigate(['/product-details', { id: id }])
  }

  onItemLoading() {

  }

  emitNbrArticleHandler(event: any) {
    // console.log(event)
  }

  onCartDetails() {
    this.route.navigate(['/cart-details'])
  }



}
