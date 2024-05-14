import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface CadastrarTarefaProps {
  onAdicionarTarefa: (tarefa: string) => void;
}

const CadastrarTarefa: React.FC<CadastrarTarefaProps> = ({ onAdicionarTarefa }) => {
  const [tarefa, setTarefa] = useState('');

  const lidarComAdicionarTarefa = () => {
    if (tarefa.trim() === '') return;
    onAdicionarTarefa(tarefa);
    setTarefa('');
  };
