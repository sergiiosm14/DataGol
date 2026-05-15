import { Component } from '@angular/core';
import { EquipoService } from '../../services/equipo-service';
import { Equipo } from '../../models/equipo';
import { Location } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-clasificacion',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './clasificacion.html',
  styleUrl: './clasificacion.css',
})
export class Clasificacion {
    equipos: Equipo[] = [];
    constructor(private equipoService: EquipoService,private location:Location){

    }

    ngOnInit(){
      this.equipoService.getEquipos().subscribe({
        next: data =>{
          console.log("Equipos",data)
          this.equipos = [...data].sort((a,b) => b.puntos - a.puntos);
        },
        error: err => {
          console.log("Error", err)
        }
      })
    }

    back(){
      this.location.back()
    }
}
