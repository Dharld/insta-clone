import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirectiveDirective } from './directives/swiper-directive.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent, SwiperDirectiveDirective],
  imports: [CommonModule],
  exports: [SearchBarComponent],
})
export class CoreModule {}
