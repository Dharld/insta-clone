import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/services/data.static';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataSource: DataSource) {
    this.dataSource.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
