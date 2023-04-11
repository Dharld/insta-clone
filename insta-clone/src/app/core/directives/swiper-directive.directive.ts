import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Directive({
  selector: '[fmSwiper]',
})
export class SwiperDirectiveDirective implements AfterViewInit {
  private readonly swiperElement: HTMLElement;

  @Input('config') config?: SwiperOptions;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit(): void {
    Object.assign(this.el.nativeElement, this.config);

    // @ts-ignore
    this.el.nativeElement.initialize();
  }
}
