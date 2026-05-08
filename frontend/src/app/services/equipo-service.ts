import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../models/jugador';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root',
})
export class EquipoService {

  private url = 'http://localhost:8080/api/equipos';
  constructor(private http: HttpClient) { }

  getEquipos() {
    return this.http.get<Equipo[]>(this.url);
  }

  getEquipo(id: number) {
    return this.http.get<Equipo>(`${this.url}/${id}`);
  }

  createEquipo(equipo: Equipo) {
    return this.http.post<Equipo>(this.url, equipo);
  }

  updateEquipo(id: number,equipo: Equipo) {
    return this.http.put<Equipo>(`${this.url}/${equipo.id}`, equipo);
  }


  deleteEquipo(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
