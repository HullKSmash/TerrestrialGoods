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
      {category: "face", brand: "Maple Hill Naturals", type: "beard wash", vendor: "Amazon", title: "Honest for Men Original Scent Beard Wash Shampoo and Conditioner", description: "All-natural, scented beard cleansing and conditioning bar.", image: "https://images-na.ssl-images-amazon.com/images/I/71MZbxZFHVL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Maple-Hill-Naturals-Original-Conditioner/dp/B017TFONQ0/ref=sr_1_7?dchild=1&keywords=beard+wash+bar&qid=1584383627&s=beauty&sr=1-7"},
      {category: "face", brand: "The Yellow Bird", type: "face wash", vendor: "Amazon", title: "Facial Soap Bar", description: "Gentle, vegan, plastic-free, USA-made facial soap bar in a variety of formulations.", image: "https://images-na.ssl-images-amazon.com/images/I/71VBUdbi9ZL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Activated-Detoxifying-Cleanser-Certified-Ingredients/dp/B01788WBC6/ref=sr_1_5?dchild=1&keywords=face%2Bwash%2Bbar&qid=1584416577&s=beauty&sr=1-5&th=1"},
      {category: "face", brand: "Drunk Elephant", type: "face wash", vendor: "Amazon", title: "Juju Bar", description: "Gentle exfoliating facial bar in two formulations.", image: "https://images-na.ssl-images-amazon.com/images/I/51PRd5yx93L._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/dp/B00L3LI6RE/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B00L3LI6RE&pd_rd_w=EEBTi&pf_rd_p=45a72588-80f7-4414-9851-786f6c16d42b&pd_rd_wg=MJ2uI&pf_rd_r=Z3YNFTBW2MQBYZGGC88M&pd_rd_r=14cdc0c7-5a5b-4c70-9e73-7764ee39dfa3&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUUpYQkhRNURCOFdFJmVuY3J5cHRlZElkPUEwMDY4MTIwMjhORFBBMjJDUDVWQyZlbmNyeXB0ZWRBZElkPUEwODg3ODYxMlJNVjE3UlA0SkwxRyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="},
      {category: "face", brand: "Ethique", type: "face wash", vendor: "Amazon", title: "Cleansing Bar", description: "Plastic-free, vegan, zero-waste facial cleansing bar.  Available in two forumations for different skin types.", image: "https://images-na.ssl-images-amazon.com/images/I/71zgqzw0HZL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Ethique-Eco-Friendly-Face-Cleansing-Your/dp/B0761VTFF3/ref=sr_1_4?dchild=1&keywords=face%2Bwash%2Bbar&qid=1584416577&s=beauty&sr=1-4&th=1"},
      {category: "face", brand: "", type: "", vendor: "Amazon", title: "", description: "", image: "", link: ""},

    ]
   };

  ngOnInit(): void {
  }

}
