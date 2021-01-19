import { Component, OnInit, Input, AfterContentInit, AfterViewChecked, AfterContentChecked, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Page, AbsoluteLayout, View, Button, StackLayout } from '@nativescript/core/ui';
import { fromEvent } from "rxjs";
import { take } from "rxjs/operators";
import { EventData } from '@nativescript/core';

@Component({
  selector: 'ns-starred-review',
  templateUrl: './starred-review.component.html',
  styleUrls: ['./starred-review.component.scss']
})
export class StarredReviewComponent implements OnInit {
  @ViewChild('myChild', { static: false }) myChild:ElementRef;

  @Input() starredReviewRate:any;
  _perWidth;
  constructor(private page: Page) { }



 
 

  ngOnInit(): void {
  
  }
ngOnChanges() {
   
}
 

   onloadReviewHolder(args:EventData){
    
     setTimeout(() => {
       const reviewHolder =args.object as AbsoluteLayout;
       
      this._perWidth = reviewHolder.getActualSize().width * parseInt(this.starredReviewRate) / 5
      //console.log("++", this.starredReviewRate)
      //console.log(this._perWidth, reviewHolder.getActualSize().width)

    }, 10); 

  }

 
}