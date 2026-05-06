import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipoService';
import { JugadorService } from '../../services/jugador-service';
import { Equipo } from '../../models/equipo';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {

  equipos: Equipo[] = [];
  jugadores: Jugador[] = [];

  constructor(
    private equipoService: EquipoService,
    private jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });

    this.jugadorService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }

  getTopJugador() {
    return this.jugadores
      .sort((a, b) => b.valorMercado - a.valorMercado)[0];
  }
}