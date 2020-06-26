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
      {category: "deodorant", 
        brand: "Secret", 
        type: "deodorant", 
        vendor: "Wal-Mart", 
        title: "Aluminum-Free Deodorant with Essential Oils", 
        description: "A major brand now comes in a plastic-free tube!", 
        image: "https://i5.walmartimages.com/asr/db302c64-edde-41d9-9a83-2a5cd1a1b6b6.8284795e1ec438c38b95588ac5d52429.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", 
        link: "https://www.walmart.com/ip/Secret-Aluminum-Free-Deodorant-with-Essential-Oils-Rose-Geranium-Plastic-Free-Packaging/393902973"},
        {category: "deodorant", 
        brand: "Old Spice", 
        type: "deodorant", 
        vendor: "Wal-Mart", 
        title: "Clean Ocean Deodorant",
        description: "A major brand now comes in a plastic-free tube!", 
        image: "https://i5.walmartimages.com/asr/adf447fb-9392-4846-a6e2-82c73b787a8f.5f3f6199628615a92db34e6a387d4efd.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff", 
        link: "https://www.walmart.com/ip/Old-Spice-Clean-Ocean-Deodorant-for-Men-Plastic-Free-Packaging/626716307"},
      {category: "deodorant", 
        brand: "Ethique", 
        type: "deodorant", 
        vendor: "Amazon", 
        title: "Eco-Friendly Deodorant Bar", 
        description: "Deodorant in a familiar bar form, without the plastic case.  Available in two scent options or unscented.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71vfODL7ZdL._SL1500_.jpg", 
        link: "https://amzn.to/2UzZWL4"},
      {category: "deodorant", 
        brand: "Meow Meow Tweet", 
        type: "deodorant", 
        vendor: "Amazon", 
        title: "Lavender or Tea Tree Deodorant Cream", 
        description: "", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71vMKYvdRDL._AC_SL1098_.jpg", 
        link: "https://amzn.to/2xFgkAC"},
      {category: "deodorant", 
        brand: "Meow Meow Tweet", 
        type: "deodorant", 
        vendor: "Amazon", 
        title: "Baking Soda Free Sensitive Skin Lavender Deodorant Cream", 
        description: "A gentle cream deodorant made without baking soda.  Vegan, organic, cruelty-free, fair trade, and plastic-free.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/41uQ0rslf%2BL.jpg", 
        link:"https://amzn.to/2JqcAWB"},
      {category: "deodorant", 
        brand: "Primal Life Organics", 
        type: "deodorant", 
        vendor: "Amazon", 
        title: "Stick Up Natural Vegan Deodorant", 
        description: "All natural and friendly to sensitive skin.  Packaged in an eco-friendly cardboard tube.", 
        image: "https://images-na.ssl-images-amazon.com/images/I/81%2Bz59c7urL._AC_SL1500_.jpg", 
        link: "https://amzn.to/39xeGOX"}
    ]
   }

  ngOnInit(): void {
  }

}