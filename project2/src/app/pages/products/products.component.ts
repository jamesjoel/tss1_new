import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product = [
    {
      name : "Sony",
      price : 4500,
      category : "Mobile"

    },
    {
      name : "Samsung TV",
      price : 22500,
      category : "Electronics"

    },
    {
      name : "Nike T-Shirt",
      price : 1450,
      category : "Fashion Men"

    },
    {
      name : "Saree",
      price : 6000,
      category : "Fashion Women"

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
