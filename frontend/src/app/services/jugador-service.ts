import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {

  private url = 'http://localhost:8080/api/jugadores';
  constructor(private http: HttpClient) { }

  getJugadores() {
    return this.http.get<Jugador[]>(this.url);
  }

  getJugador(id: number) {
    return this.http.get<Jugador>(`${this.url}/${id}`);
  }

  createJugador(jugador: Jugador) {
    return this.http.post<Jugador>(this.url, jugador);
  }

  updateJugador(jugador: Jugador) {
    return this.http.put<Jugador>(`${this.url}/${jugador.id}`, jugador);
  }


  deleteJugador(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
