import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import { getAlunoById } from "../api/alunosService";

export default function telaDetalhes({ route, navigation }) {
  const { id } = route.params;
  const [aluno, setAluno] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlunoById(id)
      .then(setAluno)
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <ActivityIndicator style={{flex:1}} />;

  if (!aluno) return <View><Text>Aluno não encontrado</Text></View>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20 }}>{aluno.nome || aluno.name}</Text>
      <Text>ID: {aluno.id}</Text>
      <Text>Turma: {aluno.turma|| "-"}</Text>
      <Text>Curso: {aluno.curso || "-"}</Text>
      <Text>Matricula: {aluno.matricula || "-"}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}
