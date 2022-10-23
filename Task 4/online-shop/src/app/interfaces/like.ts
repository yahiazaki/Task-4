import { Product } from './product';

export class Like {
  likeDetails: Array<LikeDetail>;
  constructor() {
    this.likeDetails = [];
  }
  addProduct(product: Product) {
    let currentProduct = this.likeDetails.find(
      (x) => x.product.id == product.id
    );
    if (currentProduct != null) currentProduct.incQuantity();
    else this.likeDetails.push(new LikeDetail(product));

    localStorage.setItem('like', JSON.stringify(this));
  }

}

export class LikeDetail {
  product: Product;
  quantity: number;
  price: number;
  constructor(product: Product) {
    this.product = product;
    this.quantity = 1;
    this.price = product.price - product.price * product.discount;
  }

  incQuantity() {
    this.quantity += 1;
    this.price =
      this.quantity *
      (this.product.price - this.product.price * this.product.discount);
  }
  decQuantity() {
    if (this.quantity >= 1) {
      this.quantity -= 1;
      this.price =
        this.quantity *
        (this.product.price - this.product.price * this.product.discount);
    }
  }
}
