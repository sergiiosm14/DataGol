import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../services/teamsService';
import { Team } from '../../models/team';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.html',
  styleUrls: ['./teams.css'],
  imports: [RouterLink]
})
export class Teams {
equipos: Team[] = [];
  constructor(private equipoService: TeamsService){

  }

  ngOnInit(){
    this.equipoService.getEquipos().subscribe( data => {
      this.equipos = data
    })
  }

  deleteTeam(id: number){
    if(confirm("Esta Seguro de eliminar a este equipo?")){
      this.equipoService.deleteEquipo(id).subscribe( data =>{
        this.ngOnInit()
      })
    }
  }
}