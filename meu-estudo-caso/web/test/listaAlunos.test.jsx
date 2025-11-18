import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ListaAlunos from ".src/page/listaAlunos.jsx";
import * as alunosService from ".src/api/alunosService.js";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";

const mockAlunos = [
  { id: 1, nome: "João Silva",  email: "joao@example.com" },
  { id: 2, nome: "Maria Souza", email: "maria@example.com" },
];

vi.spyOn(alunosService, "getAlunos").mockImplementation(async () => mockAlunos);

describe("ListaAlunos", () => {
    it("exibe a lista de alunos", async () => {
        render(
            <MemoryRouter>
                <ListaAlunos />
            </MemoryRouter>
        );

        await waitFor(() => {
            expect(screen.getByText("Lista de Alunos")).toBeInTheDocument();
        });

        expect(screen.getByText("João Silva")).toBeInTheDocument();
        expect(screen.getByText("Maria Souza")).toBeInTheDocument();
        expect(screen.getAllByText("Ver detalhes").length).toBe(2);
    });
});