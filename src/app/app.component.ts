import { Component } from '@angular/core';
import { WebsiteData } from './website-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio-laura-0723';

  websiteDataList: WebsiteData[]= [
    {
      name: "Leipzig Wardrobe",
      photo: "../assets/LW.png",
      url: "https://laurazig.github.io/leipzigWardrobe/",
      description: "communtity app"
    },
    {
      name: "Biobites",
      photo: "../assets/BB.jpg",
      url: "https://biobites.vercel.app/",
      description: "organic vegen version of Hello Fresh food boxes"      
    },
    {
      name: "Hurricane",
      photo: "../assets/Hurricain.png",
      url: "https://lenganthanh.github.io/final_inspiration_jam/index.html",
      description: "DCI hackathon"
    }      
  ]

  selectedWebsite: WebsiteData | undefined;
  updateSelectedWebsite(data: WebsiteData) { 
    this.selectedWebsite = data;
  }

}
