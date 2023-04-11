import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { User } from 'src/app/model/user.model';
import { DataSource } from 'src/app/services/data.static';
import Swiper, { SwiperOptions } from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts!: Post[];
  activeUser!: User;
  stories = new Array<string>(9).fill('');

  @ViewChild('swiperRef', { static: true }) protected _swiperRef:
    | ElementRef
    | undefined;
  swiper?: Swiper;

  constructor(private dataSource: DataSource) {
    register();
  }

  ngOnInit(): void {
    this.dataSource.getPosts().then((posts) => {
      this.posts = posts;
    });
    this.dataSource.getActiveUser().then((user) => {
      this.activeUser = user;
    });
    this._initSwiper();
  }

  private _initSwiper() {
    const options: SwiperOptions = {
      slidesPerGroup: 4,
      slidesPerView: 6,
      spaceBetween: 20,
    };

    const swiperEl = this._swiperRef?.nativeElement;
    Object.assign(swiperEl, options);

    swiperEl.initialize();
    if (this.swiper) this.swiper.currentBreakpoint = false;
    this.swiper = this._swiperRef?.nativeElement.swiper;
  }

  swipeNext() {
    this.swiper?.slideNext();
  }

  swipePrev() {
    this.swiper?.slidePrev();
  }
}
