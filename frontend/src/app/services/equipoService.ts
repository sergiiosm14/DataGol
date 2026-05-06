import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl = 'http://localhost:8080/api/equipos';

  constructor(private http: HttpClient) {}

  // GET todos los equipos
  getEquipos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET equipo por id
  getEquipo(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // POST crear equipo
  createEquipo(equipo: any): Observable<any> {
    return this.http.post(this.apiUrl, equipo);
  }

  // PUT actualizar equipo
  updateEquipo(id: number, equipo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, equipo);
  }

  // DELETE eliminar equipo
  deleteEquipo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}