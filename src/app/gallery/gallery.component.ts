import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WebsiteData } from '../website-data';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  @Input() websiteList: WebsiteData[] = [];
  results: WebsiteData[] = [];
  @Output() websiteSelectedEvent = new EventEmitter<WebsiteData>();

  constructor() { }

  ngOnInit(): void {
  }

  searchWebsites(searchText: string) {
    if (!searchText) return;

    this.results = this.websiteList.filter(
      (data: WebsiteData) => data.name
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    );
  }

  selectWebsiteName(data: WebsiteData) {
    this.websiteSelectedEvent.emit(data);
  }
}
