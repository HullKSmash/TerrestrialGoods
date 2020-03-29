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
      {category: "tooth", brand: "Hello Oral Care", type: "toothpaste", vendor: "Amazon", title: "Toothpaste Tablets", description: "Activated charcoal, flouride-free toothpaste tablets in a recyclable aluminum tin.", image: "https://images-na.ssl-images-amazon.com/images/I/81OspXKH8qL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Hello-Oral-Care-Activated-Toothpaste/dp/B0831JNCJJ/ref=sr_1_5?dchild=1&keywords=toothpaste+tablets&qid=1584426873&sr=8-5"},
      {category: "tooth", brand: "Nelson Naturals", type: "toothpaste", vendor: "Amazon", title: "Crush & Brush Toothpaste Tablets", description: "Mint charcoal toothpaste tablets in a refillable glass jar.", image: "https://images-na.ssl-images-amazon.com/images/I/81N7gTlEw-L._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Crush-Brush-Toothpaste-Tablets-Mint-Charcoal/dp/B07V9PR7LW/ref=sr_1_11?dchild=1&keywords=toothpaste+tablets&qid=1584426991&sr=8-11"},
      {category: "tooth", brand: "Bamboearth", type: "floss", vendor: "Amazon", title: "Pure Silk Eco Floss", description: "Natural wax-coated floss in a refillable plastic-free package.", image: "https://images-na.ssl-images-amazon.com/images/I/61InueZifBL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/dp/B07TFJH43X/ref=sspa_dk_detail_3?psc=1&pd_rd_i=B07TFJH43X&pd_rd_w=OeiSC&pf_rd_p=c83c55b0-5d97-454a-a592-a891098a9709&pd_rd_wg=kqm3h&pf_rd_r=X848YA3FXNPVE86XDPWC&pd_rd_r=8b729167-8312-496e-bbb1-8c5db5517e7d&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzNFZQSVZXWkM3ODhEJmVuY3J5cHRlZElkPUEwODg3NjQ2MjkyQUhQOFRNVTlFMCZlbmNyeXB0ZWRBZElkPUEwMTY0ODExTkxLU1VQOUJKU1Imd2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWMmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"}
    ]
   }

  ngOnInit(): void {
  }

}
