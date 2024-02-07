import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function HomeScreen({ navigation }) {
  const [amount, setAmount] = useState('');

  const handleConvert = () => {
    // For simplicity, we're not doing the actual conversion here.
    // You should replace this with a call to your conversion service.
    navigation.navigate('Result', { amount });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter amount in USD:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%', marginTop: 10, marginBottom: 10, paddingHorizontal: 10 }}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Convert" onPress={handleConvert} />
    </View>
  );
}

export default HomeScreen;