import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResultado('');
  };

  const handlePercentage = () => {
    const valorTotal = 100; 
    const porcentagem = input; 

    const resultado = (valorTotal * porcentagem) / 100;
    setResult(`Resultado: ${resultado}`);
  };

  const calculateResult = () => {
    try {
      setResultado(eval(input));
    } catch {
      setResultado('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.visor}>{input || '0'}</Text>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.buttond} onPress={clearInput}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('()')}>
          <Text style={styles.buttonText}>()</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonc} onPress={() => handlePercentage('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('(-')}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress(',')}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttoni} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black'
  },
  visor: {
    fontSize: 30,
    marginBottom: 20,
    color: 'white'
  },
  resultado: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    
  },
  button: {
    width: '20%',
    backgroundColor: '#333333',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    marginTop: 30,
    borderRadius:360
  },
  buttonc: {
    width: '20%',
    backgroundColor: '#5F5F5F',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    marginTop: 30,
    borderRadius:360
  },
  buttond: {
    width: '20%',
    backgroundColor: '#5F5F5F',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    marginTop: 30,
    borderRadius:360
  },
  buttoni: {
    width: '20%',
    backgroundColor: '#32CD32',
    padding: 20,
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
    marginTop: 30,
    borderRadius:360
  },
  buttonText: {
    fontSize: 20,
  },
});

export default App;