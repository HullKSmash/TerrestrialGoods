import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {

  makeupProducts: Array<any>

  constructor() {
    this.makeupProducts = [
      {category: "makeup", 
        brand: "Sweet Leilani", 
        type: "skin", 
        vendor: "Amazon", 
        title: "Skin Care Cover", 
        description: "A foundation and concealer in a waterproof formula.  All-natural, vegan, gluten-free.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71QJudnP-KL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B01FQBC6C2/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B01FQBC6C2&linkId=4fffdcf8f62159d1a5c2e25970180101"},
      {category: "makeup", 
        brand: "Zao Organic Makeup", 
        type: "skin", 
        vendor: "Zao", 
        title: "Mineral Silk Foundation", 
        description: "Organic powder foundation in a bamboo case.", 
        image: "https://www.zaoorganicmakeup.com/pub/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/z/a/zao_organic_mineral_silk_fundation__loosepowder_.jpg", 
        link: "https://www.zaoorganicmakeup.com/organic-mineral-silk-foundation-loose-powder-n.html"},
      {category: "makeup", 
        brand: "Zao", 
        type: "eyes", 
        vendor: "Zao", 
        title: "Pencils: Eyes, Lips, Eyebrows", 
        description: "Multi-purpose pencil made with shea butter.  Perfect for sensitive skin.", 
        image: "https://www.zaoorganicmakeup.com/pub/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/p/e/pencils_op_1.jpg", 
        link: "https://www.zaoorganicmakeup.com/organic-pencils-eyes-lips-eyebrows.html"},
      {category: "makeup", 
        brand: "Aether", 
        type: "eyes", 
        vendor: "Aether", 
        title: "Rose Quartz Crystal Gemstone Palette", 
        description: "Eyeshadow palette in an all-paper container.  12-shade palettes available in three different color schemes.", 
        image: "https://cdn.shopify.com/s/files/1/0637/6147/products/aether_beauty_rose_quartz_crystal_gemstone_palette_at_credo_beauty.jpg?v=1574881622", 
        link: "https://credobeauty.com/products/rose-quartz-crystal-gemstone-palette"},
      {category: "makeup", 
        brand: "Antonym", 
        type: "skin", 
        vendor: "Antonym", 
        title: "Baked Foundation", 
        description: "Powder foundation in a bamboo case.  Available in several shades.", 
        image: "https://cdn.shopify.com/s/files/1/1232/5612/products/20170412_Antonym_0103-Edit_medium.png?v=1496934782", 
        link: "https://www.antonymcosmetics.com/collections/our-foundation-collection/products/baked-foundation-medium-beige"},
      {category: "makeup", 
        brand: "Axiology", 
        type: "lips", 
        vendor: "Amazon", 
        title: "Lipstick", 
        description: "Vegan, cruelty-free lipstick in aluminum and paper tubes.  Available in several shades.", 
        image: "https://m.media-amazon.com/images/I/71GWl00a4DL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B07YZWB9FL/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B07YZWB9FL&linkId=7a5cfa72a014dd1cdf476516e1e261bd"}
    ]
  };

  ngOnInit(): void {
  }

}
