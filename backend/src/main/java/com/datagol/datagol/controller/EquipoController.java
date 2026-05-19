package com.datagol.datagol.controller;

import com.datagol.datagol.model.Equipo;
import com.datagol.datagol.model.Jugador;
import com.datagol.datagol.repository.EquipoRepository;
import com.datagol.datagol.repository.JugadorRepository; // IMPORTANTE
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipos")
@CrossOrigin(origins = "*")
public class EquipoController {

    @Autowired
    private EquipoRepository equipoRepository;

    @Autowired
    private JugadorRepository jugadorRepository; // NECESARIO PARA LOS AGENTES LIBRES

    // GET - Obtener todos los equipos
    @GetMapping
    public List<Equipo> getAllEquipos() {
        return equipoRepository.findAll();
    }

    // GET - Obtener equipo por ID
    @GetMapping("/{id}")
    public ResponseEntity<Equipo> getEquipoById(@PathVariable Long id) {
        return equipoRepository.findById(id)
                .map(equipo -> ResponseEntity.ok(equipo))
                .orElse(ResponseEntity.notFound().build());
    }

    // POST - Crear equipo
    @PostMapping
    public Equipo createEquipo(@RequestBody Equipo equipo) {
        return equipoRepository.save(equipo);
    }

    // PUT - Actualizar equipo
    @PutMapping("/{id}")
    public ResponseEntity<Equipo> updateEquipo(@PathVariable Long id, @RequestBody Equipo datos) {
        return equipoRepository.findById(id)
                .map(equipo -> {
                    equipo.setNombre(datos.getNombre());
                    equipo.setPais(datos.getPais());
                    equipo.setLiga(datos.getLiga());
                    equipo.setEstadio(datos.getEstadio());
                    equipo.setFundacion(datos.getFundacion());
                    equipo.setEscudoUrl(datos.getEscudoUrl());
                    equipo.setPuntos(datos.getPuntos());
                    equipo.setGolesFavor(datos.getGolesFavor());
                    equipo.setGolesContra(datos.getGolesContra());

                    // No solemos actualizar la lista de jugadores directamente desde aquí
                    // para evitar errores de integridad, pero si lo necesitas:
                    if (datos.getJugadores() != null) {
                        equipo.setJugadores(datos.getJugadores());
                    }
                    Equipo actualizado = equipoRepository.save(equipo);
                    return ResponseEntity.ok(actualizado);
                }).orElse(ResponseEntity.notFound().build());
    }

    // DELETE - Borrar equipo y dejar jugadores como Agentes Libres
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEquipo(@PathVariable Long id) {
        return equipoRepository.findById(id).map(equipo -> {
            // 1. Convertir a los jugadores en Agentes Libres
            if (equipo.getJugadores() != null) {
                for (Jugador jugador : equipo.getJugadores()) {
                    jugador.setEquipo(null); // Desvinculamos del club
                    jugadorRepository.save(jugador); // Persistimos el cambio en el jugador
                }
            }

            // 2. Ahora que los jugadores están a salvo, borramos el equipo
            equipoRepository.delete(equipo);
            return ResponseEntity.ok().build();
        }).orElse(ResponseEntity.notFound().build());
    }
}
