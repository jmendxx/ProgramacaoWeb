import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getAlunos } from "../api/alunosService";
import { Table, Spinner, Alert } from "react-bootstrap";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

    useEffect(() => {   
        let mounted = true;
        getAlunos()
          .then((data) => {
            if (mounted) setAlunos(data);
            })
            .catch((err) => {
                console.error(err);
                if (mounted) setError("Erro ao carregar alunos.");
            })
            .finally(() => {
                if (mounted) setLoading(false);
            });
        return () => {
            mounted = false;
        };
    }, []);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    return (
        <>
            <h2>Lista de Alunos</h2>

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Dethales</th>
                    </tr>
                </thead>

                <tbody>
                    {alunos.length === 0 ? (
                        <tr>
                            <td colSpan="4">Nenhum aluno encontrado.</td>
                        </tr>
                    ) : (
                        alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email || "-"}</td>
                                    <td>
                                        <Link to={`/alunos/${aluno.id}`}>Ver detalhes</Link>
                                    </td>
                            </tr>
                        ))
                    )}                 
                </tbody>
            </Table>
        </>
    );
}
