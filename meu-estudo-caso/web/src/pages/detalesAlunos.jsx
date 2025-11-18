import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getAlunoById } from "../api/alunosService";
import { Card, Spinner, Alert, Button } from "react-bootstrap";

export default function DetalesAlunos() {
  const { id } = useParams();
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

    useEffect(() => {
        getAlunoById(id)
            .then((data) => setAluno(data))
            .catch((err) => {
                console.error(err);
                setError("Erro ao carregar detalhes do aluno.");
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant="danger">{error}</Alert>;
    }

    if (!aluno) {
        return <Alert variant="warning">Aluno não encontrado.</Alert>;
    }
    return (
        <Card>
            <Card.Body>
                <Card.Title>Detalhes do Aluno</Card.Title>
                <Card.Text>
                    <strong>ID:</strong> {aluno.id} <br/>
                    <strong>Nome:</strong> {aluno.nome} <br/>
                    <strong>Turma:</strong> {aluno.turma} <br/>
                    <strong>Curso:</strong> {aluno.curso || "-"} <br/>
                    <strong>Matrícula:</strong> {aluno.Matricula || "-"} <br/>
                </Card.Text>

                <div className="btn-voltar">
                    <Button as={Link} to="/" variant="secondary">Voltar</Button>
                </div>
            </Card.Body>
        </Card> 
    );
}