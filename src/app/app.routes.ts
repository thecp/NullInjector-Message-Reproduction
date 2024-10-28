import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'main', loadComponent: () => import('./SomeRoutedComponent.component').then((c) => c.SomeRoutedComponent), },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main',
  },
];
