import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IntroGuard } from '../../guards/intro.guard';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      // { path: 'home-tab', loadChildren: '../home-tab/home-tab.module#HomeTabPageModule'},
      {path: 'home-tab', loadChildren: () => import('../home-tab/home-tab.module').then( m => m.HomeTabPageModule) 
      , canActivate:[IntroGuard]},
      { path: 'evento', loadChildren: '../evento/evento.module#EventoPageModule' },
      { path: 'profile-tab', loadChildren: '../profile-tab/profile-tab.module#ProfileTabPageModule' },
      {path: 'create-evento', loadChildren: '../evento/create-evento/create-evento.module#CreateEventoPageModule'}
    ]
  },
  {
    path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
