import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipoService } from '../../services/equipo-service';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipos',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './equipos.html',
  styleUrl: './equipos.css',
})
export class Equipos {
  public equipos: Equipo[] = [];
  constructor(
    private http: HttpClient,
    private equipoService: EquipoService,
    private location: Location,
    private router: Router,
  ) {}

  ngOnInit() {
    this.equipoService.getEquipos().subscribe((data) => {
      console.log('Equipos', data);
      this.equipos = data;
    });
  }

  crearEquipo() {
    this.router.navigate(['/equipo/add/-1']);
  }

  editarEquipo(id: number){

    this.router.navigate(["/equipo/add/",id])
  }
  borrarEquipo(id: number) {
    if (confirm('¿Estás seguro de que quieres borrar este equipo?')) {
      this.equipoService.deleteEquipo(id).subscribe((data) => {
        console.log('Equipo borrado', data);
        this.ngOnInit();
      });
    }
  }

  back(){
    this.location.back()
  }
  
}
