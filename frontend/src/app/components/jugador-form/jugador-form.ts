import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Posicion } from '../../models/posicion';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../services/equipo-service';

@Component({
  selector: 'app-jugador-form',
  imports: [ReactiveFormsModule],
  templateUrl: './jugador-form.html',
  styleUrl: './jugador-form.css',
})
export class JugadorForm {
  form: FormGroup;
  posiciones: Posicion[] = [
    { value: 'POR', viewValue: 'POR' },
    { value: 'DFC', viewValue: 'DFC' },
    { value: 'LD', viewValue: 'LD' },
    { value: 'LI', viewValue: 'LI' },
    { value: 'MCD', viewValue: 'MCD' },
    { value: 'MC', viewValue: 'MC' },
    { value: 'MCO', viewValue: 'MCO' },
    { value: 'EI', viewValue: 'EI' },
    { value: 'ED', viewValue: 'ED' },
    { value: 'DC', viewValue: 'DC' },
  ];
  errorFormulario: string = '';

  equipos: Equipo[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jugadorService: JugadorService,
    private equipoService: EquipoService,
    private http: HttpClient,
    private location: Location,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      id: [-1],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      edad: [0, Validators.required],
      estatura: [0, Validators.required],
      peso: [0, Validators.required],
      posicion: ['', Validators.required],
      goles: [0, Validators.required],
      asistencias: [0, Validators.required],
      valorMercado: [0, Validators.required],
      nacionalidad: ['', Validators.required],
      fotoUrl: ['', Validators.required],
      equipo: [null,Validators.required],
    });
  }

  ngOnInit() {
    const idJugador = this.route.snapshot.paramMap.get('id');
    if (idJugador !== '-1') {
      this.jugadorService.getJugador(Number(idJugador)).subscribe((data) => {
        this.form.patchValue({
          ...data,
          equipo: Number(data.equipo?.id) ?? null,
        });
      });
    }
    this.equipoService.getEquipos().subscribe((data) => {
      this.equipos = data;
      console.log(this.equipos);
    });
  }

 save() {
  const formValue = this.form.value;
  
  // IMPORTANTE: Spring espera un objeto para el campo 'equipo', no solo el ID
  const jugadorParaEnviar = {
    ...formValue,
    equipo: { id: formValue.equipo } // Convertimos el ID del select en un objeto
  };

  if (formValue.id === -1) {
    // CREAR NUEVO JUGADOR
    this.jugadorService.createJugador(jugadorParaEnviar).subscribe({
      next: (res) => {
        console.log('Jugador creado:', res);
        this.back()
      },
      error: (err) => {
        this.errorFormulario = "Error al crear el jugador";
        console.error(err);
      }
    });
  } else {
    // ACTUALIZAR JUGADOR EXISTENTE
    // Pasamos el ID y el objeto (asumiendo que tu servicio recibe ambos)
    this.jugadorService.updateJugador(formValue.id, jugadorParaEnviar).subscribe({
      next: (res) => {
        console.log('Jugador actualizado:', res);
        this.back()
      },
      error: (err) => {
        this.errorFormulario = "Error al actualizar el jugador";
        console.error(err);
      }
    });
  }
 }

 back() {
    this.location.back();
  }
}
