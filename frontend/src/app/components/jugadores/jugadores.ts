import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorService } from '../../services/jugador-service';
import { RouterLink, Router } from '@angular/router';
import { Jugador } from '../../models/jugador';
import { Location } from '@angular/common';
import { EquipoService } from '../../services/equipo-service';
import { Equipo } from '../../models/equipo';


@Component({
  selector: 'app-jugadores',
  imports: [RouterLink],
  templateUrl: './jugadores.html',
  styleUrl: './jugadores.css',
})
export class Jugadores {
  public jugadores: Jugador[] = [];
  public equipos: Equipo[] = []
  constructor(
    private http: HttpClient,
    private jugadorService: JugadorService,
    private location: Location,
    private router: Router,private equipoService: EquipoService
  ) {}

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe((data) => {
      console.log('Jugadores', data);
      this.jugadores = data;
    });
  }

  crearJugador() {
    this.router.navigate(['/jugador/add/-1']);
  }
  borrarJugador(id: number) {
    if (confirm('¿Estás seguro de que quieres borrar este jugador?')) {
      this.jugadorService.deleteJugador(id).subscribe((data) => {
        console.log('Jugador borrado', data);
        this.ngOnInit();
      });
    }
  }

  back(){
    this.location.back()
  }
 
}
