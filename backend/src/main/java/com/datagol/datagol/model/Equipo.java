package com.datagol.datagol.model;

import jakarta.persistence.*;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "equipos")
public class Equipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String pais;

    private String liga;

    private String estadio;

    private int fundacion; // año de creación

    private String escudoUrl;

    // Relación con jugadores (un equipo tiene muchos jugadores)
    @OneToMany(mappedBy = "equipo", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Jugador> jugadores;

    // Constructor vacío
    public Equipo() {
    }

    // Constructor completo
    public Equipo(String nombre, String pais, String liga,
            String estadio, int fundacion, String escudoUrl) {

        this.nombre = nombre;
        this.pais = pais;
        this.liga = liga;
        this.estadio = estadio;
        this.fundacion = fundacion;
        this.escudoUrl = escudoUrl;
    }

    // GETTERS Y SETTERS
    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    public String getLiga() {
        return liga;
    }

    public void setLiga(String liga) {
        this.liga = liga;
    }

    public String getEstadio() {
        return estadio;
    }

    public void setEstadio(String estadio) {
        this.estadio = estadio;
    }

    public int getFundacion() {
        return fundacion;
    }

    public void setFundacion(int fundacion) {
        this.fundacion = fundacion;
    }

    public String getEscudoUrl() {
        return escudoUrl;
    }

    public void setEscudoUrl(String escudoUrl) {
        this.escudoUrl = escudoUrl;
    }

    public List<Jugador> getJugadores() {
        return jugadores;
    }

    public void setJugadores(List<Jugador> jugadores) {
        this.jugadores = jugadores;
    }
}
