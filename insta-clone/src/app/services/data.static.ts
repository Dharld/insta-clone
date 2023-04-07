import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { of, tap } from "rxjs";
import { Post } from "../model/post.model";
import { User } from "../model/user.model";
import { createPost, createUser } from "../utils/utils";

@Injectable({
  providedIn: "root",
})
export class DataSource {
  private _posts$: Subject<Post[]> = new Subject();
  public posts$ = this._posts$.asObservable();
  private posts: Post[] = [];

  private _activeUser$: Subject<User> = new Subject();
  private activeUser: User = createUser();
  public activeUser$ = this._activeUser$.asObservable();

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.posts.push(createPost());
    }
  }

  async getPosts() {
    return this.posts;
  }
  async getActiveUser() {
    return this.activeUser;
  }
}
