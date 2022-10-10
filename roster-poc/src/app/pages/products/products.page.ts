import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../../repositories/product.repository';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public products: Product[] = [];

  constructor(private productRepository: ProductRepository,  ) {  }

  ngOnInit() {
    console.log('Products');

    this.getProducts();


  }


  async getProducts() {

    await this.productRepository.createTestData();
    this.products = await this.productRepository.getProducts();

    console.log(this.products)

  }

}
