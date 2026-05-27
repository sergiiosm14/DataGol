import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Rankings } from './pages/rankings/rankings';
import { Standings } from './pages/standings/standings';
import { Dashboard } from './pages/dashboard/dashboard';
import { Teams } from './pages/teams/teams';
import { Home } from './components/home/home';
import { Players } from './pages/players/players';
import { PlayerModal } from './components/modals/player-modal/player-modal';
import { TeamModal } from './components/modals/team-modal/team-modal';
import { TeamDetails } from './components/modals/team-details/team-details';
import { PlayerDetails } from './components/modals/player-details/player-details';
import { Settings } from './components/settings/settings';


export const routes: Routes = [
  { path: '', component:Home },

  { path: 'dashboard', component: Dashboard },
  { path: 'teams', component: Teams },
  { path: 'players', component: Players },
  { path: 'standings', component: Standings},
  { path: 'rankings', component: Rankings },
  {
    path: 'player/:id', component: PlayerModal
  },
  {path: 'team/:id',component: TeamModal},
  {
    path: 'team-details/:id',
    component: TeamDetails
  },{
    path: 'player-details/:id',
    component: PlayerDetails
  },
  {
    path: 'settings',
    component: Settings
  }
];
