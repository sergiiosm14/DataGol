import { Routes } from '@angular/router';
import { Jugadores } from './components/jugadores/jugadores';
import { Home } from './components/home/home';
import { JugadorDetails } from './components/jugador-details/jugador-details';
import { JugadorForm } from './components/jugador-form/jugador-form';
import { Equipos } from './components/equipos/equipos';
import { EquipoForm } from './components/equipo-form/equipo-form';
import { EquipoDetails } from './components/equipo-details/equipo-details';
import { Clasificacion } from './components/clasificacion/clasificacion';
import { LaLiga } from './components/la-liga/la-liga';
import { Rankings } from './components/rankings/rankings';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'jugadores',
        component: Jugadores
    },
    {
        path: 'jugador/:id',
        component: JugadorDetails
    },
    {
        path: 'jugador/add/:id',
        component: JugadorForm
    },
    {
        path: 'equipos',
        component: Equipos
    },
    {
        path: 'equipo/add/:id',
        component: EquipoForm
    },{
        path: 'equipo/:id',
        component: EquipoDetails
    },
    {
        path: 'clasificacion',
        component: Clasificacion
    },
    {
        path: 'laliga',
        component: LaLiga
    },
    {
        path: 'rankings',
        component: Rankings
    }
];
