import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { PostComponent } from './components/post/post.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [HomeComponent, PostComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule],
  exports: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
