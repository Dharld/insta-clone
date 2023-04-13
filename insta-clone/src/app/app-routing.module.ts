import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./features/explore/explore.module').then((m) => m.ExploreModule),
  },
  {
    path: 'reels',
    loadChildren: () =>
      import('./features/reels/reels.module').then((m) => m.ReelsModule),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./features/post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'direct',
    loadChildren: () =>
      import('./features/direct/direct.module').then((m) => m.DirectModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
