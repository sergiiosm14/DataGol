import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JugadorService } from '../../services/jugador-service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugador-edit',
  templateUrl: './jugador-edit.html',
  imports: [ReactiveFormsModule]
})
export class JugadorEdit implements OnInit {

  form!: FormGroup;
  id!: number;

  jugador!: Jugador;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private jugadorService: JugadorService,
    private router: Router
  ) {}

  ngOnInit(): void {

    // 🔥 creamos formulario reactivo
    this.form = this.fb.group({
      nombre: [''],
      apellido1: [''],
      apellido2: [''],
      edad: [0],
      estatura: [0],
      peso: [0],
      posicion: [''],
      goles: [0],
      asistencias: [0],
      valorMercado: [0],
      nacionalidad: [''],
      fotoUrl: ['']
    });

    // 🔥 cogemos ID de la URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // 🔥 cargamos jugador desde API
    this.jugadorService.getJugador(this.id).subscribe(data => {
      this.jugador = data;

      // rellenamos formulario
      this.form.patchValue(this.jugador);
    });
  }

  updateJugador() {

    // objeto final actualizado
    const jugadorActualizado: Jugador = {
      ...this.jugador,
      ...this.form.value
    };

    this.jugadorService.updateJugador(this.id, jugadorActualizado)
      .subscribe(() => {
        alert('Jugador actualizado');
        this.router.navigate(['/jugadores']);
      });
  }

  createJugador() {
    const nuevoJugador: Jugador = this.form.value;

    this.jugadorService.createJugador(nuevoJugador)
      .subscribe(() => {
        alert('Jugador creado');
        this.router.navigate(['/jugadores']);
      });
   }
}