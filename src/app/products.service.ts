import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products = [
    {id: 1, category: "hair", brand: "Sweet and Sassy", type: "shampoo", vendor: "Amazon", title: "Sweet & Sassy Shampoo Bar", description: "A lathering, subltely scented shampoo bar in 100% plastic-free packaging.", link: "https://www.amazon.com/Shampoo-Bars-Refill-Natural-Treated/dp/B071FBKJFT/ref=sr_1_4?m=A1K3H4Y39Y7W64&qid=1581195904&s=merchant-items&sr=1-4"},
    {id: 2, category: "hair", brand: "Sweet and Sassy", type: "conditioner", vendor: "Amazon", title: "Sweet & Sassy Conditioner Bar", description: "A moisturizing conditioner bar in 100% plastic-free packaging.", link: "https://www.amazon.com/Sweet-Sassy-Conditioner-Packs-Kissed/dp/B07K1M1NRR/ref=pd_bxgy_2/135-0020146-4196046?_encoding=UTF8&pd_rd_i=B07K1M1NRR&pd_rd_r=2be7eb0b-0dfe-47ed-b429-d9d0db43fd85&pd_rd_w=GODHW&pd_rd_wg=LGH19&pf_rd_p=fd08095f-55ff-4a15-9b49-4a1a719225a9&pf_rd_r=A23JK7G65FCXWW3AP0AG&psc=1&refRID=A23JK7G65FCXWW3AP0AG"}
  ];

  constructor() { }

  public getProducts():Array<{id, category, brand, type, vendor, title, description, link}> {
    return this.products;
  }

  public addProduct(product: {id, category, brand, type, vendor, title, description, link}) {
    this.products.push(product);
  }

}
