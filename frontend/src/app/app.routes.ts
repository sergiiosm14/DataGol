import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Jugadores } from './components/jugadores/jugadores';
import { Equipos } from './components/equipos/equipos';
import { JugadorEdit } from './components/jugador-edit/jugador-edit';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'jugadores',
    component: Jugadores,
  },
  {
    path: 'equipos',
    component: Equipos,
  },
  {
    path: 'jugadores/edit/:id',
    component: JugadorEdit,
  },{
    path: 'jugadores/create/:id',
    component: JugadorEdit,
  }
];
