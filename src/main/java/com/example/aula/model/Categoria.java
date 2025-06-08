package com.example.aula.model;

public enum Categoria {
    ENTRADA("Entrada"),
    PRATO_PRINCIPAL("Prato Principal"),
    SOBREMESA("Sobremesa"),
    BEBIDA("Bebida");

    private final String texto;

    Categoria(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }

    public static Categoria fromTexto(String texto) {
        for (Categoria p : Categoria.values()) {
            if (p.getTexto().equalsIgnoreCase(texto)) {
                return p;
            }
        }
        throw new IllegalArgumentException("Categoria inválida: " + texto);
    }
}
