import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { EquipoService } from '../../services/equipo-service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipo-details',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './equipo-details.html',
  styleUrl: './equipo-details.css',
})
export class EquipoDetails {

  public equipo!: Equipo;

  constructor(
    private equipoService: EquipoService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    const idEquipo = this.route.snapshot.paramMap.get('id');

    this.equipoService.getEquipo(Number(idEquipo)).subscribe(data => {
      console.log('Equipo', data);
      this.equipo = data;
    });
  }

  back() {
    this.location.back();
  }
}