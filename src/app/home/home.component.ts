import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProducts: Array<any>;

  constructor() { 
    this.featuredProducts = [
      {category: "hair", brand: "Sweet & Sassy", type: "shampoo", vendor: "Amazon", title: "Shampoo Bar", description: "A lathering, subltely scented shampoo bar in 100% plastic-free packaging.  Available in several scents.", image: "https://m.media-amazon.com/images/I/81sPV+eylVL._AC_UL320_ML3_.jpg", link: "https://smile.amazon.com/Shampoo-Bars-Refill-Natural-Treated/dp/B071FBKJFT/ref=sr_1_4?m=A1K3H4Y39Y7W64&qid=1581195904&s=merchant-items&sr=1-4"}
    ];
  }

  ngOnInit(): void {
  }

}
