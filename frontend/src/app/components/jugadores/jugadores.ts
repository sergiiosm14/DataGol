import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JugadorService } from '../../services/jugador-service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.html'
})
export class Jugadores implements OnInit {

  jugadores: Jugador[] = [];

  constructor(
    private jugadorService: JugadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getJugadores();
  }

  createJugador() {
    this.router.navigate(['/jugadores/create/-1']);
  }

  getJugadores() {
    this.jugadorService.getJugadores().subscribe(data => {
      this.jugadores = data;
    });
  }

  editJugador(id: number) {
    this.router.navigate(['/jugadores/edit', id]);
  }

  deleteJugador(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este jugador?')) {
      this.jugadorService.deleteJugador(id).subscribe(() => {
        this.getJugadores();
      });
    }
  }
}