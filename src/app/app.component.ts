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
      description: "Communtity app"
    },
    {
      name: "Needles, Craft & Kultur",
      photo: "../assets/NCK.png",
      url: "https://needles-craft-kultur.vercel.app/",
      description: "Grassi Museum community textile workshop. React.js, Next.js, Typescript, TailwindCSS."      
    },
    {
      name: "Gatxs Helps Gatxs",
      photo: "../assets/Gatxs.png",
      url: "https://gatxs-laura.vercel.app/",
      description: "Devhaus hackathon"
    }      
  ]

  selectedWebsite: WebsiteData | undefined;
  updateSelectedWebsite(data: WebsiteData) { 
    this.selectedWebsite = data;
  }

}
