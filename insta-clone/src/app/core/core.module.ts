import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperDirectiveDirective } from './directives/swiper-directive.directive';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PreviewComponent } from './components/preview-component/preview.component';
import { InputBoxComponent } from './components/input-box/input-box.component';

@NgModule({
  declarations: [
    SearchBarComponent,
    SwiperDirectiveDirective,
    PreviewComponent,
    InputBoxComponent,
  ],
  imports: [CommonModule],
  exports: [SearchBarComponent, PreviewComponent, InputBoxComponent],
})
export class CoreModule {}
