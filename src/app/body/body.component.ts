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
      {category: "body", brand: "BRÖÖ", type: "soap bar", vendor: "Amazon", title: "Craft Beer Bar", description: "Head-to-toe soap and shampoo bar.  Brewed with beer, adding B vitamins for healthy hair and skin.", image: "https://images-na.ssl-images-amazon.com/images/I/81w4H3g7bxL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/BR%C3%96%C3%96-Craft-Beer-Shampoo-Hydrating/dp/B07BQZS3ZV/ref=sr_1_33?dchild=1&keywords=plastic-free+soap&qid=1584417774&s=beauty&sr=1-33"},
      {category: "body", brand: "J.R. Watkins", type: "soap bar", vendor: "Amazon", title: "Pure Castille Body Soap Bar", description: "Gentle all-around body cleansing bar.  Free of parabens, dyes, and phthalates.  Available in an assortment of scents.", image: "https://images-na.ssl-images-amazon.com/images/I/61oEHfHe2dL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/dp/B00QRSNNG2/ref=sspa_dk_detail_0?pd_rd_i=B00QRSNNG2&pd_rd_w=uNXRG&pf_rd_p=c83c55b0-5d97-454a-a592-a891098a9709&pd_rd_wg=JxEH1&pf_rd_r=QQXPGN2MBN6G9CQTHY6F&pd_rd_r=491fa2f6-4e59-4464-a6af-e362fbe84747&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE0WEFITVVFRDNPTUcmZW5jcnlwdGVkSWQ9QTAwMjQ4MDgzVUFBTzBaUERRWElaJmVuY3J5cHRlZEFkSWQ9QTAzMzcyNjcxRzAwUFdKSDlGUldXJndpZGdldE5hbWU9c3BfZGV0YWlsX3RoZW1hdGljJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1"},
      {category: "body", brand: "O Naturals", type: "soap bar", vendor: "Amazon", title: "Black Bar Soap Collection", description: "Variety pack of six African black soaps.  Cruelty-free and all-natural.", image: "https://images-na.ssl-images-amazon.com/images/I/91116HRFuuL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/dp/B07GWSMYYL/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B07GWSMYYL&pd_rd_w=JtE0B&pf_rd_p=c83c55b0-5d97-454a-a592-a891098a9709&pd_rd_wg=Nvu9M&pf_rd_r=C2MRS548TWXXAPC49SYE&pd_rd_r=4532682a-deef-46de-985c-044f236d1fd7&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjlFTzk4NUVWWFhIJmVuY3J5cHRlZElkPUEwNjc1MjUyM0ZRWVZJR1QxWjZPNCZlbmNyeXB0ZWRBZElkPUEwMzM1MjQyMkhDSDhUMlMzTDA4USZ3aWRnZXROYW1lPXNwX2RldGFpbF90aGVtYXRpYyZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="},
      {category: "body", brand: "", type: "", vendor: "Amazon", title: "", description: "", image: "", link: ""},
    ]
   };

  ngOnInit(): void {

  }

}
