import { Component, OnInit } from '@angular/core';
import { createSearchPreview } from 'src/app/utils/utils';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  searchResults: any[] = [];

  constructor() {
    for (let i = 0; i < 35; i++) {
      let newResult = createSearchPreview();
      this.searchResults.push(newResult);
    }
  }

  ngOnInit(): void {}
}
