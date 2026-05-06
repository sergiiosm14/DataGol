package com.datagol.datagol.config;

import com.datagol.datagol.model.Equipo;
import com.datagol.datagol.model.Jugador;
import com.datagol.datagol.repository.EquipoRepository;
import com.datagol.datagol.repository.JugadorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class InitData {

    @Bean
    CommandLineRunner loadData(
            EquipoRepository equipoRepository,
            JugadorRepository jugadorRepository
    ) {
        return args -> {

            // ❗ evitar duplicados
         

            // ======================
            // EQUIPOS
            // ======================
            Equipo barcelona = new Equipo();
            barcelona.setNombre("FC Barcelona");
            barcelona.setPais("España");
            barcelona.setLiga("LaLiga");
            barcelona.setEstadio("Spotify Camp Nou");
            barcelona.setFundacion(1899);
            barcelona.setEscudoUrl("https://example.com/barcelona.png");

            Equipo madrid = new Equipo();
            madrid.setNombre("Real Madrid");
            madrid.setPais("España");
            madrid.setLiga("LaLiga");
            madrid.setEstadio("Santiago Bernabéu");
            madrid.setFundacion(1902);
            madrid.setEscudoUrl("https://example.com/real-madrid.png");

            equipoRepository.save(barcelona);
            equipoRepository.save(madrid);

            // ======================
            // JUGADORES BARCELONA
            // ======================
            Jugador pedri = new Jugador();
            pedri.setNombre("Pedri");
            pedri.setApellido1("González");
            pedri.setApellido2("López");
            pedri.setEdad(21);
            pedri.setEstatura(1.74);
            pedri.setPeso(65);
            pedri.setPosicion("MC");
            pedri.setGoles(6);
            pedri.setAsistencias(8);
            pedri.setValorMercado(80);
            pedri.setNacionalidad("España");
            pedri.setFotoUrl("https://example.com/pedri.png");
            pedri.setEquipo(barcelona);

            // ======================
            // JUGADORES MADRID
            // ======================
            Jugador vini = new Jugador();
            vini.setNombre("Vinicius");
            vini.setApellido1("Junior");
            vini.setApellido2("");
            vini.setEdad(23);
            vini.setEstatura(1.76);
            vini.setPeso(62);
            vini.setPosicion("EI");
            vini.setGoles(20);
            vini.setAsistencias(12);
            vini.setValorMercado(150);
            vini.setNacionalidad("Brasil");
            vini.setFotoUrl("https://example.com/vini.png");
            vini.setEquipo(madrid);

            jugadorRepository.save(pedri);
            jugadorRepository.save(vini);
        };
    }
}