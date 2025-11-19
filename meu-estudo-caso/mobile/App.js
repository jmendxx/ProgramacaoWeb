import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import telaAlunos from './src/screens/telaAlunos';
import telaDetalhes from './src/screens/telaDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Alunos">

        <Stack.Screen
          name="Alunos"
          component={telaAlunos}
          options={{ title: 'Alunos' }}
        />

        <Stack.Screen
          name="Detalhes"
          component={telaDetalhes}
          options={{ title: 'Detalhes' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
