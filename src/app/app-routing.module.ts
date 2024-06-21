import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPathsEnum } from './app-paths.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppPathsEnum.DASHBOARD,
  },
  {
    path: AppPathsEnum.DASHBOARD,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: `${AppPathsEnum.DETAILS}/:id`,
    loadComponent: () =>
      import('./pages/details/details.component').then(
        (c) => c.DetailsComponent
      ),
  },
  {
    path: `${AppPathsEnum.FAVOURITES}`,
    loadComponent: () =>
      import('./pages/favourites/favourites.component').then(
        (c) => c.FavouritesComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
