import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deodorant',
  templateUrl: './deodorant.component.html',
  styleUrls: ['./deodorant.component.css']
})
export class DeodorantComponent implements OnInit {

  deodorantProducts: Array<any>

  constructor() {
    this.deodorantProducts = [
      {category: "deodorant", brand: "Freewheelin' Market", type: "deodorant", vendor: "Etsy", title: "Natural Deodorant", description: "A natural deodorant in a plastic-free tube.  Available in multiple scents, including an unscented option.", image: "https://i.etsystatic.com/9676768/r/il/16d495/1673130514/il_794xN.1673130514_ghaj.jpg", link: "https://www.etsy.com/listing/647224207/natural-deodorant-in-eco-friendly-tube-3?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=deodorant+zero+waste&ref=sr_gallery-1-1&organic_search_click=1&pro=1"},
      {category: "deodorant", brand: "Arcadia Natural", type: "deodorant", vendor: "Etsy", title: "Deodorant", description: "An all-natural, zero-waste deodorant in a paper-based tube.  Available in a wide array of scents, or unscented, for both men and women.", image: "https://i.etsystatic.com/8816097/r/il/d56765/1919350484/il_1588xN.1919350484_oseg.jpg", link: "https://www.etsy.com/listing/547221050/all-natural-zero-waste-deodorant-vegan?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=deodorant+zero+waste&ref=sc_gallery-1-1&plkey=909804b1ef291a863871ea8d5f4262dc58052dc8%3A547221050&frs=1&bes=1"},
      {category: "deodorant", brand: "kleineAuszeit", type: "deodorant", vendor: "Etsy", title: "Deodorant", description: "A creme deodorant in a glass pot with a bamboo lid.  No plastic, aluminum, or palm oil.  Green tea scented.", image: "https://i.etsystatic.com/9818312/r/il/223c79/1708662711/il_1588xN.1708662711_rvx5.jpg", link: "https://www.etsy.com/listing/611576720/effective-deodorant-without-aluminum?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=deodorant+zero+waste&ref=sr_gallery-1-16&organic_search_click=1"}
    ]
   }

  ngOnInit(): void {
  }

}
