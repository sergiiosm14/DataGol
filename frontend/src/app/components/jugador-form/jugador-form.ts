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
      apellido2: ['', Validators.required],
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
    const idJugador = this.route.snapshot.paramMap.get('id');

    const jugadorToSend = {
      ...this.form.value,
      equipo: this.form.value.equipo ? { id: this.form.value.equipo } : null // ← SOLO EL ID
    };
    console.log("Jugador enviar",jugadorToSend)

    if (idJugador === '-1') {
      delete jugadorToSend.id;
      this.jugadorService.createJugador(jugadorToSend).subscribe(() => {
        this.router.navigate(['/jugadores']);
      });
    } else {
      jugadorToSend.id = Number(idJugador);
      this.jugadorService.updateJugador(jugadorToSend).subscribe(() => {
        this.router.navigate(['/jugadores']);
      });
    }
  }

  back() {
    this.location.back();
  }
}
