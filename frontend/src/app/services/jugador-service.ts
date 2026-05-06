import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private apiUrl = 'http://localhost:8080/api/jugadores';

  constructor(private http: HttpClient) {}

  // GET todos los jugadores
  getJugadores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET jugador por id
  getJugador(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // POST crear jugador
  createJugador(jugador: any): Observable<any> {
    return this.http.post(this.apiUrl, jugador);
  }

  // PUT actualizar jugador
  updateJugador(id: number, jugador: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, jugador);
  }

  // DELETE eliminar jugador
  deleteJugador(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}