import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { EquipoService } from '../../services/equipo-service';
import { Equipo } from '../../models/equipo';

@Component({
  selector: 'app-equipo-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipo-form.html',
  styleUrl: './equipo-form.css',
})
export class EquipoForm {

  form: FormGroup;
  errorFormulario: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipoService: EquipoService,
    private http: HttpClient,
    private location: Location,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      id: [-1],
      nombre: ['', Validators.required],
      pais: ['', Validators.required],
      liga: ['', Validators.required],
      estadio: ['', Validators.required],
      fundacion: [0, Validators.required],
      escudoUrl: ['', Validators.required],
      puntos: [0, Validators.required],
      golesFavor: [0, Validators.required],
      golesContra: [0, Validators.required],
      jugadores: [[]]

    });
  }

  ngOnInit() {
    const idEquipo = this.route.snapshot.paramMap.get('id');

    // EDITAR
    if (idEquipo && idEquipo !== '-1') {
      this.equipoService.getEquipo(Number(idEquipo)).subscribe((data: Equipo) => {
        this.form.patchValue(data);

        this.form.patchValue({
          jugadores: data.jugadores
        })
      });
    }
  }

  save() {
    const idEquipo = this.route.snapshot.paramMap.get('id');

    if (!this.form.valid) {
      this.errorFormulario = 'Por favor completa todos los campos obligatorios.';
      return;
    }

    const {jugadores, ...equipo} = this.form.value;

    // CREAR
    if (idEquipo === '-1' || idEquipo === null) {
      this.equipoService.createEquipo(equipo).subscribe(() => {
        this.router.navigate(['/equipos']);
      });
    }

    // EDITAR
    else {
      this.equipoService.updateEquipo(Number(idEquipo),equipo).subscribe(() => {
        this.router.navigate(['/equipos']);
      });
    }
  }

  back() {
    this.location.back();
  }
}