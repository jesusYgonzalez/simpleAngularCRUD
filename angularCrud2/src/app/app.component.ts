import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productsArray: Product[] = [
    {id: 1, title: 'first title', content: 'first content'},
    {id: 2, title: 'second title', content: 'second content'},
    {id: 3, title: 'third title', content: 'third content'},
    {id: 4, title: 'fourth title', content: 'fourth content'},
  ];

  selectedProduct: Product = new Product();


  addEdit() {
    if (this.selectedProduct.id === 0) {
    this.selectedProduct.id = this.productsArray.length + 1;
    this.productsArray.push(this.selectedProduct);
    }
    this.selectedProduct = new Product();
  }

  openForEdit(product: Product) {
    this.selectedProduct = product;
  }

  onDelete() {
    if(confirm('Are you sure you want to delete this?')) {
    this.productsArray = this.productsArray.filter(x => x != this.selectedProduct);
    this.selectedProduct = new Product();
    }
  }
}
