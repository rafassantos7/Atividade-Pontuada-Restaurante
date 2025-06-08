package com.example.aula.service;

import com.example.aula.exception.PratoJaCadastradoException;
import com.example.aula.model.Pratos;
import com.example.aula.repository.PratosRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;

@Service
@Validated
public class PratosService {
    private PratosRepository pratosRepository;

    public PratosService(PratosRepository pratosRepository) {
        this.pratosRepository = pratosRepository;
    }

    public List<Pratos> listarTodos() {
        return pratosRepository.findAll();
    }

    public Pratos salvar(@Valid Pratos pratos) {
        if (pratosRepository.findByNomeprato(pratos.getNomeprato()).isPresent()) {
            throw new PratoJaCadastradoException("Esse prato já foi reservado.");
        }

        return pratosRepository.save(pratos);
    }

    public Pratos atualizar(@Valid Pratos pratos) {
        Pratos pratosAtualizar = pratosRepository.findById(pratos.getId())
                .orElseThrow(() -> new IllegalArgumentException("Prato não encontrado."));

        pratosAtualizar.setNomeprato(pratos.getNomeprato());
        pratosAtualizar.setDescricao(pratos.getDescricao());
        pratosAtualizar.setPreco(pratos.getPreco());
        pratosAtualizar.setCategoria(pratos.getCategoria());
        pratosAtualizar.setDisponibilidade(pratos.getDisponibilidade());
        pratosAtualizar.setUrl(pratos.getUrl());

        return pratosRepository.save(pratosAtualizar);
    }

    public void excluir(Long id) {
        Pratos pratosExcluir = pratosRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Prato não encontrado"));

        pratosRepository.deleteById(pratosExcluir.getId());
    }

}
