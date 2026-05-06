package com.datagol.datagol.controller;

import com.datagol.datagol.model.Jugador;
import com.datagol.datagol.repository.JugadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/jugadores")
@CrossOrigin(origins = "*") // para poder conectar Angular después
public class JugadorController {

    @Autowired
    private JugadorRepository jugadorRepository;

    // GET - Obtener todos los jugadores
    @GetMapping
    public List<Jugador> getAllJugadores() {
        return jugadorRepository.findAll();
    }

    // GET - Obtener jugador por ID
    @GetMapping("/{id}")
    public Optional<Jugador> getJugadorById(@PathVariable Long id) {
        return jugadorRepository.findById(id);
    }

    // POST - Crear jugador
    @PostMapping
    public Jugador createJugador(@RequestBody Jugador jugador) {
        return jugadorRepository.save(jugador);
    }

    // PUT - Actualizar jugador
    @PutMapping("/{id}")
    public Jugador updateJugador(@PathVariable Long id, @RequestBody Jugador jugadorDetails) {

        Jugador jugador = jugadorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Jugador no encontrado"));

        jugador.setNombre(jugadorDetails.getNombre());
        jugador.setApellido1(jugadorDetails.getApellido1());
        jugador.setApellido2(jugadorDetails.getApellido2());
        jugador.setEdad(jugadorDetails.getEdad());
        jugador.setEstatura(jugadorDetails.getEstatura());
        jugador.setPeso(jugadorDetails.getPeso());
        jugador.setPosicion(jugadorDetails.getPosicion());
        jugador.setGoles(jugadorDetails.getGoles());
        jugador.setAsistencias(jugadorDetails.getAsistencias());
        jugador.setValorMercado(jugadorDetails.getValorMercado());
        jugador.setNacionalidad(jugadorDetails.getNacionalidad());
        jugador.setFotoUrl(jugadorDetails.getFotoUrl());
        jugador.setEquipo(jugadorDetails.getEquipo());

        return jugadorRepository.save(jugador);
    }

    // DELETE - Borrar jugador
    @DeleteMapping("/{id}")
    public void deleteJugador(@PathVariable Long id) {
        jugadorRepository.deleteById(id);
    }
}