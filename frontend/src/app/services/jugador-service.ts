import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';

@Injectable({
  providedIn: 'root',
})
export class JugadorService {

  private url = 'http://localhost:8080/api/jugadores';

  constructor(private http: HttpClient) { }

  // Obtener todos los jugadores
  getJugadores() {
    return this.http.get<Jugador[]>(this.url);
  }

  // Obtener un jugador por ID
  getJugador(id: number) {
    return this.http.get<Jugador>(`${this.url}/${id}`);
  }

  // Crear un nuevo jugador
  createJugador(jugador: any): Observable<Jugador> {
    return this.http.post<Jugador>(this.url, jugador);
  }

  // Actualizar un jugador existente
  // Corregido: id: number y usamos el id del parámetro para la URL
  updateJugador(id: number, jugador: Jugador) {
    return this.http.put<Jugador>(`${this.url}/${id}`, jugador);
  }

  // Borrar un jugador
  deleteJugador(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}