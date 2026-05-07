import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador-service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugador-details',
  imports: [],
  templateUrl: './jugador-details.html',
  styleUrl: './jugador-details.css',
})
export class JugadorDetails {
  public jugador!: Jugador;
  constructor(private jugadorService: JugadorService,private http: HttpClient,private route: ActivatedRoute,private location: Location) { }

  ngOnInit() {
    const idJugador = this.route.snapshot.paramMap.get('id');
    this.jugadorService.getJugador(Number(idJugador)).subscribe(data => {
      console.log("Jugador", data);
      this.jugador = data;

    });
  }

  back(){
    this.location.back(); 
  }
}
