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
      {category: "hair", brand: "J.R. Liggett's", type: "shampoo", vendor: "Amazon", title: "All-Natural Shampoo Bar", description: "All-natural, sulfate-free, vegan shampoo bar in a variety of scents and formulas.", image: "https://images-na.ssl-images-amazon.com/images/I/81gnf49boSL._AC_UL320_ML3.jpg", link: "https://smile.amazon.com/J-R-Liggetts-Fashioned-Shampoo-Variety/dp/B07YXF8CQP/ref=sxin_3_ac_d_rm?ac_md=0-0-YmFyIHNoYW1wb28%3D-ac_d_rm&cv_ct_cx=bar%2Bshampoo&dchild=1&keywords=bar%2Bshampoo&pd_rd_i=B00KGGH0UQ&pd_rd_r=6d075834-d6bd-41ec-8363-0e2f71790cbb&pd_rd_w=fuV2H&pd_rd_wg=9dwQN&pf_rd_p=de19e82a-2d83-4ae8-9f5c-212586b8b9a0&pf_rd_r=FT7XWYZD252KBNH6XQZ7&qid=1584376240&th=1"},
      {category: "hair", brand: "Sweet & Sassy", type: "shampoo", vendor: "Amazon", title: "Shampoo Bar", description: "A lathering, subltely scented shampoo bar in 100% plastic-free packaging.  Available in several scents.", image: "https://m.media-amazon.com/images/I/81sPV+eylVL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Shampoo-Bars-Refill-Natural-Treated/dp/B071FBKJFT/ref=sr_1_4?m=A1K3H4Y39Y7W64&qid=1581195904&s=merchant-items&sr=1-4"},
      {category: "hair", brand: "Sweet & Sassy", type: "conditioner", vendor: "Amazon", title: "Conditioner Bar", description: "A moisturizing conditioner bar in 100% plastic-free packaging.  Available in several scents.", image: "https://m.media-amazon.com/images/I/8104OXzqEwL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Sweet-Sassy-Conditioner-Packs-Kissed/dp/B07K1M38SY/ref=pd_bxgy_img_2/135-0020146-4196046?_encoding=UTF8&pd_rd_i=B07K1M1NRR&pd_rd_r=65359e9f-711b-4865-a5d4-9fb2b6808067&pd_rd_w=FveKF&pd_rd_wg=sLZzQ&pf_rd_p=9d05ca86-8760-4334-a147-e5d5836a8859&pf_rd_r=FB0BCDN8G2MP1PT6BYAX&refRID=FB0BCDN8G2MP1PT6BYAX&th=1"},
      {category: "hair", brand: "Ethique", type: "shampoo", vendor: "Amazon", title: "Shampoo Bar", description: "Plastic-free shampoo bar from a zero-waste brand.  Available in a variety of formulations for different hair types.  Try them all in the sampler pack below, or get your favorite here", image: "https://images-na.ssl-images-amazon.com/images/I/71W9n1Y8KeL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Ethique-Eco-Friendly-Solid-Shampoo-Wrangler/dp/B07572QDSY/ref=sxin_3_ac_d_rm?ac_md=1-1-YmFyIHNoYW1wb28gYW5kIGNvbmRpdGlvbmVy-ac_d_rm&cv_ct_cx=bar%2Bshampoo&dchild=1&keywords=bar%2Bshampoo&pd_rd_i=B07572ZHB9&pd_rd_r=6d075834-d6bd-41ec-8363-0e2f71790cbb&pd_rd_w=fuV2H&pd_rd_wg=9dwQN&pf_rd_p=de19e82a-2d83-4ae8-9f5c-212586b8b9a0&pf_rd_r=FT7XWYZD252KBNH6XQZ7&qid=1584376240&th=1"},
      {category: "hair", brand: "Ethique", type: "shampoo", vendor: "Amazon", title: "Shampoo Bar Sampler Pack", description: "Sampler pack for Ethique's shampoo bar formulations.  Plastic-free, zero-waste.", image: "https://images-na.ssl-images-amazon.com/images/I/41UXTu4hvfL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Ethique-Eco-Friendly-Hair-Sampler/dp/B0761VRNL6/ref=sr_1_20_sspa?dchild=1&keywords=bar+shampoo&qid=1584376240&sr=8-20-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFXTFYwUThMS0ZVMEwmZW5jcnlwdGVkSWQ9QTA4OTM0MzcxOUtaNUFBVzBWV0k0JmVuY3J5cHRlZEFkSWQ9QTA1NjM2MjUyQ0dBMUpKVzFVQzFDJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="},
      {category: "hair", brand: "Ethique", type: "conditioner", vendor: "Amazon", title: "Conditioner Bar", description: "Plastic-free conditioner bar from a zero-waste brand.  Available in formulations for dry or oily hair.", image: "https://images-na.ssl-images-amazon.com/images/I/41rLR58LjjL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Ethique-Eco-Friendly-Conditioner-Normal-Dry-Guardian/dp/B07572RXKP/ref=pd_bxgy_2/135-0020146-4196046?_encoding=UTF8&pd_rd_i=B07572RXKP&pd_rd_r=dad6b570-943d-4a87-a1a3-4757d46bf2fb&pd_rd_w=zz7WS&pd_rd_wg=YFt2Z&pf_rd_p=9d05ca86-8760-4334-a147-e5d5836a8859&pf_rd_r=HVAWT5V9A8250K877X57&psc=1&refRID=HVAWT5V9A8250K877X57"},
      {category: "hair", brand: "Plaine Products", type: "shampoo", vendor: "Plaine Products", title: "Shampoo – Rosemary Mint Vanilla", description: "Gentle, vegan, cruelty-free, and free of sulfates, parabens, phthalates, silicone, and palm oil.  Aluminum bottles can be returned to Plaine Products for reuse.  Available in two scents.", image: "https://mk0plaineproduc2a6do.kinstacdn.com/wp-content/uploads/shampoo-rosemary-mint-vanilla-1-510x612.jpg", link: "https://www.plaineproducts.com/product/shampoo-rmv/"},
      {category: "hair", brand: "Plaine Products", type: "conditioner", vendor: "Plaine Products", title: "Conditioner – Rosemary Mint Vanilla", description: "Gentle, vegan, cruelty-free, and free of sulfates, parabens, phthalates, and palm oil.  Aluminum bottles can be returned to Plaine Products for reuse.  Available in two scents.", image: "https://mk0plaineproduc2a6do.kinstacdn.com/wp-content/uploads/conditioner-rosemary-mint-vanilla-2-510x612.jpg", link: "https://www.plaineproducts.com/product/conditioner-rmv-2/"}
    ]
   };

  ngOnInit(): void {
  }

}
