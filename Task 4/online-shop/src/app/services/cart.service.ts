import { Injectable } from '@angular/core';
import { Like } from '../interfaces/like';
import { Order } from '../interfaces/order';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  order: Order;
  like: Like;
  constructor() {
    this.order = new Order();
    this.like = new Like();
    let savedOrderStr = localStorage.getItem('order');
    if (savedOrderStr) {
      let savedOrder: Order = JSON.parse(savedOrderStr);
      savedOrder.orderDetails.forEach((detail) => {
        for (let i = 0; i < detail.quantity; i++)
          this.order.addProduct(detail.product);
      });
    }
  }

  addToCart(product: Product) {
    this.order.addProduct(product);
  }
  addToLiked(product: Product){
    this.like.addProduct(product)
    console.log(this.like.likeDetails);
  }
}
