import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bodyProducts: Array<any>

  constructor() {
    this.bodyProducts = [
      {category: "body", 
        brand: "J.R. Watkins", 
        type: "soap bar", 
        vendor: "Amazon", 
        title: "Pure Castille Body Soap Bar", 
        description: "Gentle all-around body cleansing bar.  Free of parabens, dyes, and phthalates.  Available in an assortment of scents.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/61oEHfHe2dL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B00QRSNNG2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B00QRSNNG2&linkId=17fcb6961e758c399310568dc7b8d5e5"},
        {category: "body", 
          brand: "Ethique", 
          type: "soap bar", 
          vendor: "Amazon", 
          title: "Eco-Friendly Bodywash Bar", 
          description: "Cleansing body bar available in six different scents & formulations.  Vegan & cruelty-free.", 
          image: "https://images-na.ssl-images-amazon.com/images/I/81yTf3GiOAL._SL1500_.jpg", 
          link: "https://amzn.to/2UXo7lz"},
        {category: "body", 
          brand: "Ethique", 
          type: "lotion bar", 
          vendor: "Amazon", 
          title: "Solid Butter Block", 
          description: "Body moisture in block form lets you hydrate your skin without liquid lotion and a bottle.  Three different scents available.", 
          image: "https://images-na.ssl-images-amazon.com/images/I/71h3nz7RjpL._SL1500_.jpg", 
          link: "https://amzn.to/2R6T6uo"},
        {category: "body", 
          brand: "The Yellow Bird", 
          type: "soap bar", 
          vendor: "Amazon", 
          title: "Natural Body Soap", 
          description: "Handmade soap available in 10 different formulations and scents to suit your skin type and preferences.", 
          image: "https://images-na.ssl-images-amazon.com/images/I/71Jmx8g75OL._SL1500_.jpg", 
          link: "https://amzn.to/2ypkGfF"},
        {category: "body",
          brand: "BRÖÖ", 
          type: "soap bar",
          vendor: "Amazon", 
          title: "Craft Beer Bar", 
          description: "Head-to-toe soap and shampoo bar.  Brewing the soap with beer adds B vitamins for healthy hair and skin.", 
          image: "https://images-na.ssl-images-amazon.com/images/I/81w4H3g7bxL._AC_UL320_ML3_.jpg", 
          link: "https://www.amazon.com/gp/product/B07BQZS3ZV/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07BQZS3ZV&linkId=2451b34c8e70d3fc628c48eb8363453a"},
        {category: "body", 
          brand: "O Naturals", 
          type: "soap bar", 
          vendor: "Amazon", 
          title: "Black Bar Soap Collection", 
          description: "Variety pack of six African black soaps.  Cruelty-free and all-natural.", 
          image: "https://images-na.ssl-images-amazon.com/images/I/91116HRFuuL._AC_UL320_ML3_.jpg", 
          link: "https://www.amazon.com/gp/product/B07GWSMYYL/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07GWSMYYL&linkId=8d22e1a2db1013923d9a320640739407"}
    ]
   };

  ngOnInit(): void {

  }

}
