package com.example.aula.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.URL;

@Entity
@Table(name = "table_pratos")
public class Pratos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nomeprato;

    @NotNull(message = "Descrição é obrigatória.")
    private String descricao;

    @NotNull(message = "Preco é obrigatória.")
    @Min(value = 0, message = "Preço inválido.")
    private double preco;

    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @URL(message = "URL inválida.")
    @NotBlank(message = "URL é obrigatória.")
    private String url;

    public Pratos() {
    }

    public Pratos(Long id, @NotBlank(message = "Nome do prato é obrigatório.") String nomeprato,
            @NotNull(message = "Descrição é obrigatória.") String descricao,
            @NotNull(message = "Preco é obrigatória.") @Min(value = 0, message = "Preço inválido.") double preco,
            Disponibilidade disponibilidade, Categoria categoria,
            @URL(message = "URL inválida.") @NotBlank(message = "URL é obrigatória.") String url) {
        this.id = id;
        this.nomeprato = nomeprato;
        this.descricao = descricao;
        this.preco = preco;
        this.disponibilidade = disponibilidade;
        this.categoria = categoria;
        this.url = url;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeprato() {
        return nomeprato;
    }

    public void setNomeprato(String nomeprato) {
        this.nomeprato = nomeprato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

   
    
}