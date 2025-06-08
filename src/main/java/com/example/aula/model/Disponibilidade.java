package com.example.aula.model;

public enum Disponibilidade {
    EM_ESTOQUE("Em estoque"),
    ESGOTADO("Esgotado");

    private final String texto;

    Disponibilidade(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }

    public static Disponibilidade fromTexto(String texto) {
        for (Disponibilidade s : Disponibilidade.values()) {
            if (s.getTexto().equalsIgnoreCase(texto)) {
                return s;
            }
        }
        throw new IllegalArgumentException("Disponibilidade inválida: " + texto);
    }
}
