package com.example.aula.repository;

import com.example.aula.model.Pratos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PratosRepository extends JpaRepository<Pratos, Long> {
    Optional<Pratos> findByNomeprato(String nomeprato);

}
