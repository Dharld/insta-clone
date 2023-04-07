import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { DataSource } from 'src/app/services/data.static';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  activeUser!: User;

  constructor(private dataSource: DataSource) {}

  ngOnInit(): void {
    this.dataSource.getPosts().then((posts) => {
      this.posts = posts;
    });
    this.dataSource.getActiveUser().then((user) => {
      this.activeUser = user;
    });
  }
}
