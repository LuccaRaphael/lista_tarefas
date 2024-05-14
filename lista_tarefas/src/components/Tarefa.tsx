import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface TarefaProps {
  tarefa: {
    id: number;
    tarefa: string;
    concluida: boolean;
  };
  onDelete: () => void;
  onToggle: () => void;
}

const Tarefa: React.FC<TarefaProps> = ({ tarefa, onDelete, onToggle }) => {
  return (
    <TouchableOpacity onPress={onToggle}>
      <View style={styles.tarefa}>
        <Text style={tarefa.concluida ? styles.concluida : null}>{tarefa.tarefa}</Text>
        <Text style={styles.deletar} onPress={onDelete}>X</Text>
      </View>
    </TouchableOpacity>
  );
};