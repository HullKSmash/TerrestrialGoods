import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hair',
  templateUrl: './hair.component.html',
  styleUrls: ['./hair.component.css']
})
export class HairComponent implements OnInit {

  hairProducts: Array<any>
  
  constructor() {
    //Could populate this with products from the service that are in the category "hair".
    this.hairProducts = [
      {category: "hair", 
        brand: "J.R. Liggett's", 
        type: "shampoo", 
        vendor: "Amazon", 
        title: "All-Natural Shampoo Bar", 
        description: "All-natural, sulfate-free, vegan shampoo bar in a variety of scents and formulas.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/81gnf49boSL._AC_UL320_ML3.jpg", 
        link: "https://www.amazon.com/gp/product/B07YXF8CQP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07YXF8CQP&linkId=213897246f6acf52b191b99d9e930ba1"},
      {category: "hair", 
        brand: "Sweet & Sassy", 
        type: "shampoo", 
        vendor: "Amazon", 
        title: "Shampoo Bar", 
        description: "A lathering, subltely scented shampoo bar in 100% plastic-free packaging.  Available in several scents.", 
        image: "https://m.media-amazon.com/images/I/81sPV+eylVL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B071FBKJFT/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B071FBKJFT&linkId=6e9ae9a4119736ff1fd5dc5592604efe"},
      {category: "hair", 
        brand: "Sweet & Sassy", 
        type: "conditioner", 
        vendor: "Amazon", 
        title: "Conditioner Bar", 
        description: "A moisturizing conditioner bar in 100% plastic-free packaging.  Available in several scents.", 
        image: "https://m.media-amazon.com/images/I/8104OXzqEwL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B07K1M38SY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07K1M38SY&linkId=f64a79f48f31df12b38fa35acb0f8baa"},
      {category: "hair", 
        brand: "Ethique", 
        type: "shampoo", 
        vendor: "Amazon", 
        title: "Shampoo Bar", 
        description: "Plastic-free shampoo bar from a zero-waste brand.  Available in a variety of formulations for different hair types.  Try them all in the sampler pack below, or get your favorite here", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71W9n1Y8KeL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B07572QDSY/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07572QDSY&linkId=058997aaaad7252e09db81a54b36ac6f"},
      {category: "hair", 
        brand: "Ethique", 
        type: "shampoo", 
        vendor: "Amazon", 
        title: "Shampoo Bar Sampler Pack", 
        description: "Sampler pack for Ethique's shampoo bar formulations.  Plastic-free, zero-waste.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/41UXTu4hvfL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B0761VRNL6/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B0761VRNL6&linkId=a522cde5275c874fe42bfc8e9da37a34"},
      {category: "hair", 
        brand: "Ethique", 
        type: "conditioner", 
        vendor: "Amazon", 
        title: "Conditioner Bar", 
        description: "Plastic-free conditioner bar from a zero-waste brand.  Available in formulations for dry or oily hair.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/41rLR58LjjL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B07572RXKP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07572RXKP&linkId=8f50e00594acfb50e43c8f9a5e518814"},
      {category: "hair", 
        brand: "Plaine Products", 
        type: "shampoo", 
        vendor: "Plaine Products", 
        title: "Shampoo – Rosemary Mint Vanilla", 
        description: "Gentle, vegan, cruelty-free, and free of sulfates, parabens, phthalates, silicone, and palm oil.  Aluminum bottles can be returned to Plaine Products for reuse.  Available in two scents.", 
        image: "https://mk0plaineproduc2a6do.kinstacdn.com/wp-content/uploads/shampoo-rosemary-mint-vanilla-1-510x612.jpg", 
        link: "https://www.plaineproducts.com/product/shampoo-rmv/"},
      {category: "hair", 
        brand: "Plaine Products", 
        type: "conditioner", 
        vendor: "Plaine Products", 
        title: "Conditioner – Rosemary Mint Vanilla", 
        description: "Gentle, vegan, cruelty-free, and free of sulfates, parabens, phthalates, and palm oil.  Aluminum bottles can be returned to Plaine Products for reuse.  Available in two scents.", 
        image: "https://mk0plaineproduc2a6do.kinstacdn.com/wp-content/uploads/conditioner-rosemary-mint-vanilla-2-510x612.jpg", 
        link: "https://www.plaineproducts.com/product/conditioner-rmv-2/"}
    ]
   };

  ngOnInit(): void {
  }

}
