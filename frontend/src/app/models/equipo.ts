import { Jugador } from './jugador';

export interface Equipo {

  id: number;

  nombre: string;

  pais: string;

  liga: string;

  estadio: string;

  fundacion: number;

  escudoUrl: string;

  jugadores: Jugador[];
}