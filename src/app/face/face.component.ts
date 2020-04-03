import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  faceProducts: Array<any>

  constructor() {
    this.faceProducts = [
      {category: "face", 
        brand: "Maple Hill Naturals", 
        type: "beard wash", 
        vendor: "Amazon", 
        title: "Honest for Men Original Scent Beard Wash Shampoo and Conditioner", 
        description: "All-natural, scented beard cleansing and conditioning bar.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71MZbxZFHVL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B017TFONQ0/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B017TFONQ0&linkId=066c3c43f40d0406094cc1eb87c31ae3"},
      {category: "face", 
        brand: "The Yellow Bird", 
        type: "face wash", 
        vendor: "Amazon", 
        title: "Facial Soap Bar", 
        description: "Gentle, vegan, plastic-free, USA-made facial soap bar in a variety of formulations.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71VBUdbi9ZL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B0177DRIEI/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B0177DRIEI&linkId=bd4ef955a3b2881bbd21783b2d9bba15"},
      {category: "face", 
        brand: "Drunk Elephant", 
        type: "face wash", 
        vendor: "Amazon", 
        title: "Juju Bar", 
        description: "Gentle exfoliating facial bar in two formulations.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/51PRd5yx93L._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B00L3LI6RE/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B00L3LI6RE&linkId=58f84eed5becc90a4fe2401e04cc3af9"},
      {category: "face", 
        brand: "Ethique", 
        type: "face wash", 
        vendor: "Amazon", 
        title: "Cleansing Bar", 
        description: "Plastic-free, vegan, zero-waste facial cleansing bar.  Available in two forumations for different skin types.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71zgqzw0HZL._AC_UL320_ML3_.jpg", 
        link: "https://www.amazon.com/gp/product/B0761VTFF3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=terrestrialgo-20&creative=9325&linkCode=as2&creativeASIN=B0761VTFF3&linkId=b29bf52b83cf0ce37b8eef0f6f78b77e"},
    ]
   };

  ngOnInit(): void {
  }

}
