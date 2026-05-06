package com.datagol.datagol.controller;

import com.datagol.datagol.model.Equipo;
import com.datagol.datagol.repository.EquipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/equipos")
@CrossOrigin(origins = "*") // necesario para Angular
public class EquipoController {

    @Autowired
    private EquipoRepository equipoRepository;

    // GET - todos los equipos
    @GetMapping
    public List<Equipo> getAllEquipos() {
        return equipoRepository.findAll();
    }

    // GET - equipo por ID
    @GetMapping("/{id}")
    public Optional<Equipo> getEquipoById(@PathVariable Long id) {
        return equipoRepository.findById(id);
    }

    // POST - crear equipo
    @PostMapping
    public Equipo createEquipo(@RequestBody Equipo equipo) {
        return equipoRepository.save(equipo);
    }

    // PUT - actualizar equipo
    @PutMapping("/{id}")
    public Equipo updateEquipo(@PathVariable Long id, @RequestBody Equipo datos) {

        Equipo equipo = equipoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Equipo no encontrado"));

        equipo.setNombre(datos.getNombre());
        equipo.setPais(datos.getPais());
        equipo.setLiga(datos.getLiga());
        equipo.setEstadio(datos.getEstadio());
        equipo.setFundacion(datos.getFundacion());
        equipo.setEscudoUrl(datos.getEscudoUrl());
        equipo.setJugadores(datos.getJugadores());

        return equipoRepository.save(equipo);
    }

    // DELETE - borrar equipo
    @DeleteMapping("/{id}")
    public void deleteEquipo(@PathVariable Long id) {
        equipoRepository.deleteById(id);
    }
}