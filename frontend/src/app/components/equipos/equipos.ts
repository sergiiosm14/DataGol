import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipoService';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.html'
})
export class Equipos implements OnInit {

  equipos: Equipo[] = [];

  constructor(private equipoService: EquipoService) {}

  ngOnInit(): void {
    this.getEquipos();
  }

  getEquipos() {
    this.equipoService.getEquipos().subscribe(data => {
      this.equipos = data;
    });
  }

  editEquipo(id: number) {
    // Aquí podrías navegar a un componente de edición, por ejemplo:
    // this.router.navigate(['/equipos/edit', id]);
    alert('Función de edición no implementada');
  }
  
  deleteEquipo(id: number) {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      this.getEquipos(); // recarga lista
    });
  }
}