import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Rankings } from './pages/rankings/rankings';
import { Standings } from './pages/standings/standings';
import { Dashboard } from './pages/dashboard/dashboard';
import { Teams } from './pages/teams/teams';
import { Players } from './pages/players/players';
import { PlayerModal } from './components/modals/player-modal/player-modal';
import { TeamModal } from './components/modals/team-modal/team-modal';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: Dashboard },
  { path: 'teams', component: Teams },
  { path: 'players', component: Players },
  { path: 'standings', component: Standings},
  { path: 'rankings', component: Rankings },
  {
    path: 'player/:id', component: PlayerModal
  },
  {path: 'team/:id',component: TeamModal}
];
