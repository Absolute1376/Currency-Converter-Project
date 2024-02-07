import React from 'react';
import { View, Text, Button } from 'react-native';

function ResultScreen({ route, navigation }) {
  const { amount } = route.params;
  
  // Placeholder for conversion result. You should replace this with real conversion logic.
  const result = parseFloat(amount) * 0.85; // Example conversion rate

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Converted Amount in EUR:</Text>
      <Text style={{ margin: 10, fontSize: 24 }}>{result.toFixed(2)} EUR</Text>
      <Button title="Convert Another" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default ResultScreen;