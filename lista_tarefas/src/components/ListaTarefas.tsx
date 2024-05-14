import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface ListaTarefasProps {
  tarefas: Array<{ id: number; tarefa: string; concluida: boolean }>;
}

const ListaTarefas: React.FC<ListaTarefasProps> = ({ tarefas }) => {
  return (
    <View style={styles.containerLista}>
      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <View style={styles.tarefa}>
            <Text>{item.tarefa}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};