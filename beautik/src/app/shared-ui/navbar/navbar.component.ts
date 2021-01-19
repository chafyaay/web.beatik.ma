import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { CartService } from '@src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() cart: any;
  @Input() nbrArt: any;
  nbrOfacticles = 0

  constructor(private cartService: CartService) { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {

  }

  ngOnInit(): void {
    this.cartService.currentdata.subscribe((data: any[]) => {
      this.nbrOfacticles = 0;
      for (let obj of data) {
        this.nbrOfacticles += obj.qnte;
      }
    })
  }

}
