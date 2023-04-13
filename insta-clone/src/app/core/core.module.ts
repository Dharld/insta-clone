import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirectiveDirective } from './directives/swiper-directive.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PreviewComponent } from './components/preview-component/preview.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SwiperDirectiveDirective,
    PreviewComponent,
  ],
  imports: [CommonModule],
  exports: [SearchBarComponent, PreviewComponent],
})
export class CoreModule {}
