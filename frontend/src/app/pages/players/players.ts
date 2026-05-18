import { Component } from '@angular/core';
import { PlayersService } from '../../services/playersService';
import { Player } from '../../models/player';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-players',
  imports: [RouterLink],
  templateUrl: './players.html',
  styleUrl: './players.css',
})
export class Players {
  jugadores: Player[] = []
  constructor(private jugadorService: PlayersService) {}

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe((data) => {
      this.jugadores = data;
      console.log(data)
    });
  }

  deletePlayer(id: number){
    if(confirm("Esta Seguro de eliminar a este jugador?")){
      this.jugadorService.deleteJugador(id).subscribe( data =>{
        this.ngOnInit()
      })
    }
  }
}
