import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooth',
  templateUrl: './tooth.component.html',
  styleUrls: ['./tooth.component.css']
})
export class ToothComponent implements OnInit {

  toothProducts: Array<any>

  constructor() {
    this.toothProducts = [
      {category: "tooth", brand: "WELdental", type: "toothpaste", vendor: "Amazon", title: "Chewtab Toothpaste Tablets", description: "Toothpaste tablets in a glass bottle with minimal-packaging refills available.  Two flavor options.", image: "https://images-na.ssl-images-amazon.com/images/I/51vvCAgLFaL._AC_UL320_SR320,320_.jpg", link: "https://www.amazon.com/gp/product/B07PHMK1LN/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07PHMK1LN&linkId=95123348f8c4d72754a5df9dc60b089d"},
      {category: "tooth", brand: "Hello Oral Care", type: "toothpaste", vendor: "Amazon", title: "Toothpaste Tablets", description: "Activated charcoal, flouride-free toothpaste tablets in a recyclable aluminum tin.", image: "https://images-na.ssl-images-amazon.com/images/I/81OspXKH8qL._AC_UL320_ML3_.jpg", link: "https://www.amazon.com/gp/product/B0831JNCJJ/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B0831JNCJJ&linkId=4bd90e88fca70014e07652228b0f58fe"},
      {category: "tooth", brand: "Nelson Naturals", type: "toothpaste", vendor: "Amazon", title: "Crush & Brush Toothpaste Tablets", description: "Mint charcoal toothpaste tablets in a refillable glass jar.", image: "https://images-na.ssl-images-amazon.com/images/I/81N7gTlEw-L._AC_UL320_ML3_.jpg", link: "https://www.amazon.com/gp/product/B07V9PR7LW/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07V9PR7LW&linkId=90f14ad9f1a2fec86ab0c0c7defc5d94"},
      {category: "tooth", brand: "Bamboearth", type: "floss", vendor: "Amazon", title: "Pure Silk Eco Floss", description: "Natural wax-coated floss in a refillable plastic-free package.", image: "https://images-na.ssl-images-amazon.com/images/I/61InueZifBL._AC_UL320_ML3_.jpg", link: "https://www.amazon.com/gp/product/B07TFJH43X/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07TFJH43X&linkId=3e45d66db0f74d213097a6d062906e23"}
    ]
   }

  ngOnInit(): void {
  }

}
