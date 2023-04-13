import { Component, OnInit } from '@angular/core';
import { createPost, createSearchPreview } from 'src/app/utils/utils';
import { DataSource } from '../../services/data.static';
import { Post } from 'src/app/model/post.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  posts: any[] = [];

  constructor(private dataSource: DataSource) {
    this.dataSource.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
