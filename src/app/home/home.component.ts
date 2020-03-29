import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: Array<any>;

  constructor() { 
    this.featuredProducts = [
      {category: "hair", brand: "Sweet & Sassy", type: "shampoo", vendor: "Amazon", title: "Shampoo Bar", description: "A lathering, subltely scented shampoo bar in 100% plastic-free packaging.  Available in several scents.", image: "https://m.media-amazon.com/images/I/81sPV+eylVL._AC_UL320_ML3_.jpg", link: "https://www.amazon.com/gp/product/B071FBKJFT/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B071FBKJFT&linkId=6e9ae9a4119736ff1fd5dc5592604efe"},
      {category: "face", brand: "Drunk Elephant", type: "face wash", vendor: "Amazon", title: "Juju Bar", description: "Gentle exfoliating facial bar in two formulations.", image: "https://images-na.ssl-images-amazon.com/images/I/51PRd5yx93L._AC_UL320_ML3_.jpg", link: "https://www.amazon.com/gp/product/B00L3LI6RE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B00L3LI6RE&linkId=58f84eed5becc90a4fe2401e04cc3af9"},
      {category: "tooth", brand: "WELdental", type: "toothpaste", vendor: "Amazon", title: "Chewtab Toothpaste Tablets", description: "Toothpaste tablets in a glass bottle with minimal-packaging refills available.  Two flavor options.", image: "https://images-na.ssl-images-amazon.com/images/I/51vvCAgLFaL._AC_UL320_SR320,320_.jpg", link: "https://www.amazon.com/gp/product/B07PHMK1LN/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07PHMK1LN&linkId=95123348f8c4d72754a5df9dc60b089d"}
    ];
  }

  ngOnInit(): void {
  }

}
