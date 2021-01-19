import { EventData, TextField } from '@nativescript/core';
import { appData } from './../../data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: any;
  public avis: any[];
  public showModal: boolean;
  comments: any[] = [];
  public commment: string;
  starValue: number;
  appData = appData;
  public selectedImage: any;
  selectedImageIndex: any;
  gallery: any[] = [];
  qnte: number;
  productInfo: any;

  public stars = new Array<any>(
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5]);


  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      const id = data.id || 1;
      this.selectedImageIndex = 0;
      this.product = appData.productList.filter(prd => prd.id == parseInt(id))[0];
      this.comments = this.product.avis;
      this.selectedImage = this.product.imageUrl;
      this.gallery = this.product.gallery;
      this.gallery.push(this.selectedImage);
      this.gallery = this.gallery.reverse();

    });
  }

  selectImage(id: any) {
    this.selectedImageIndex = id;
    this.selectedImage = this.gallery[id]
  }

  voter(starvalue: number) {
    this.showModal = false;
    this.starValue = starvalue;
  }

  acheter() {
    if (!AppSettings.getString(`prd-${this.product.id}`))
      AppSettings.setString(`prd-${this.product.id}`, `${this.product.id}`);
  }

  addAvis() {
    this.showModal = true;
    this.comments.push({})
  }

  public onTextChange(args: EventData) {
    const input = args.object as TextField;
    this.commment = input.text;
  }

  emitNbrArticleHandler(event: any) {
    this.qnte = event;
    //console.log(this.qnte)
  }

}
