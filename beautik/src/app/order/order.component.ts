import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public content = [
    { title: 'title-1', content: 'content-1' },
    { title: 'title-2', content: 'content-2' },
    { title: 'title-3', content: 'content-3' },
    { title: 'title-4', content: 'content-4' },
    { title: 'title-5', content: 'content-5' }
  ];
  index = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
