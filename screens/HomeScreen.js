import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD']; // Add more as needed

  const handleConvert = () => {
    // Here, you should include the logic to convert the amount based on selected currencies.
    // This example just navigates to the Result screen without actual conversion.
    navigation.navigate('Result', { amount, sourceCurrency, targetCurrency });
  };

  return (
    <View style={styles.container}>
      <Text>Enter amount and select currencies:</Text>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Picker
        selectedValue={sourceCurrency}
        onValueChange={(itemValue) => setSourceCurrency(itemValue)}
        style={styles.picker}>
        {currencies.map(currency => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>
      <Text>to</Text>
      <Picker
        selectedValue={targetCurrency}
        onValueChange={(itemValue) => setTargetCurrency(itemValue)}
        style={styles.picker}>
        {currencies.map(currency => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>
      <Button title="Convert" onPress={handleConvert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  picker: {
    width: '100%',
    marginVertical: 10,
  }
});

export default HomeScreen;