import { Component, OnInit } from '@angular/core';

import {Observable} from "rxjs";
import {Product} from '@prisma/client';
import {ProductsService} from "../products.service";
@Component({
  selector: 'shirt-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public $products:Observable<Product[]> | undefined
  constructor(public productsService:ProductsService) {}

  ngOnInit(): void {
    this.$products=this.productsService.getProducts();
  }


}
