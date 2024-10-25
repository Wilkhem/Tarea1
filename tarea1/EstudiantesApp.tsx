import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


interface Estudiante {
  id: string;
  name: string;
}

const EstudiantesApp: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [idCounter, setIdCounter] = useState(10); 

  
  useEffect(() => {
    const estudiantesIniciales: Estudiante[] = [
      { id: '1', name: 'Juan' },
      { id: '2', name: 'María' },
      { id: '3', name: 'Carlos' },
      { id: '4', name: 'Ana' },
      { id: '5', name: 'Pedro' },
      { id: '6', name: 'Laura' },
      { id: '7', name: 'Jorge' },
      { id: '8', name: 'Lucía' },
      { id: '9', name: 'Pablo' },
      { id: '10', name: 'Sofía' }
    ];
    setEstudiantes(estudiantesIniciales); 
  }, []);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIdCounter((prevCounter) => prevCounter + 1); 
      setEstudiantes((prevEstudiantes) => [
        ...prevEstudiantes,
        { id: (idCounter + 1).toString(), name: `Estudiante ${idCounter + 1}` }
      ]);
    }, 5000);

    
    return () => clearInterval(intervalId);
  }, [idCounter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes</Text>
      {estudiantes.length === 0 ? (
        <Text style={styles.loading}>Cargando estudiantes...</Text>
      ) : (
        <FlatList
          data={estudiantes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loading: {
    fontSize: 18,
    color: 'gray',
  },
  item: {
    fontSize: 18,
    padding: 10,
  },
});

export default EstudiantesApp;
