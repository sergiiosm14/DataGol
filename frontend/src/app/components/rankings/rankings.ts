import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador-service';
import { Jugador } from '../../models/jugador';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rankings',
  imports: [RouterLink,SlicePipe,RouterLinkActive],
  templateUrl: './rankings.html',
  styleUrl: './rankings.css',
})
export class Rankings {

  jugadores: Jugador[] = [];
  goles: Jugador[] = []
  asistencias: Jugador[] = []
  valorMercado: Jugador[] = []
  constructor(private jugadorService: JugadorService,private location: Location){

  }


  ngOnInit(){
    this.jugadorService.getJugadores().subscribe({
      next: data => {
        this.jugadores = data
        this.calcularGoles()
        this.calcularAsistencias()
        this.calcularValorMercado()
      },
      error: err => console.log("Error", err)
    })
  }

  calcularGoles(){
    this.goles  = [...this.jugadores].sort((a,b) => b.goles - a.goles)
  }

  calcularAsistencias(){
    this.asistencias  = [...this.jugadores].sort((a,b) => b.asistencias - a.asistencias)
  }
  calcularValorMercado(){
    this.valorMercado  = [...this.jugadores].sort((a,b) => b.valorMercado - a.valorMercado)
  }

  back(){
    this.location.back()
  }
}
