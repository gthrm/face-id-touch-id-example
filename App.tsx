import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import TouchID from 'react-native-touch-id';

export function App() {
  const pressHandler = async () => {
    try {
      const authenticate = await TouchID.authenticate();
      console.log('--- authenticate', authenticate);

      Alert.alert('OK');
    } catch (error) {
      console.log('--- error authenticate', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={pressHandler} style={styles.button}>
        <Text style={styles.buttonText}>Authenticate with Touch ID</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#19a0fb',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
