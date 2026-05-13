import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador-service';
import { EquipoService } from '../../services/equipo-service';
import { Jugador } from '../../models/jugador';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [RouterLink],
})
export class Home implements OnInit {
  jugadores: Jugador[] = [];
  totalEquipos: number = 0;
  valorMercadoTotal: number = 0;

  pichichi: Jugador | null = null;
  topJugadores: Jugador[] = [];

  constructor(
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
  ) {}

  ngOnInit(): void {
    this.jugadorService.getJugadores().subscribe((data) => {
      this.jugadores = data;

      this.calcularEstadisticas();
      this.calcularTopJugadores();
    });

    this.equipoService.getEquipos().subscribe((data) => {
      this.totalEquipos = data.length;
    });
  }

  calcularEstadisticas() {
    if (this.jugadores.length > 0) {
      // 💰 valor total mercado
      this.valorMercadoTotal = this.jugadores.reduce(
        (acc, j) => acc + (Number(j.valorMercado) || 0),
        0,
      );

      // 🏆 pichichi
      this.pichichi = this.jugadores.reduce((max, jugador) =>
        jugador.goles > max.goles ? jugador : max,
      );
    }
  }

  calcularTopJugadores() {
    this.topJugadores = [...this.jugadores].sort((a, b) => b.goles - a.goles).slice(0, 5);
  }
}
