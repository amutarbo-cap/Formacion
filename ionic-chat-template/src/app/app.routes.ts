import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'chat',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/chat/chat.page').then(m => m.ChatPage),
  },
];
