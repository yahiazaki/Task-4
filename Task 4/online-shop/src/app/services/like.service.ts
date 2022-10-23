import { Injectable } from '@angular/core';
import { Like } from '../interfaces/like';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class LikeService {
  like: Like;
  constructor() {
    this.like = new Like();
    let savedlikeStr = localStorage.getItem('like');
    if (savedlikeStr) {
      let savedlike: Like = JSON.parse(savedlikeStr);
      savedlike.likeDetails.forEach((detail) => {
        for (let i = 0; i < detail.quantity; i++)
          this.like.addProduct(detail.product);
      });
    }
  }

  addToLiked(product: Product) {
    this.like.addProduct(product);
  }
}
