import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { getAlunos } from "../api/alunosService";

export default function telaAlunos({ navigation }) {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAlunos()
      .then(setAlunos)
      .catch((e) => {
        console.error(e);
        alert("Erro ao carregar alunos");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={alunos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detalhes", { id: item.id })}
            style={{ padding: 12, borderBottomWidth: 1 }}
          >
            <Text style={{ fontSize: 16 }}>{item.nome || item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
