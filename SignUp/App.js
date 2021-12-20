
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/login';
import SingUp from './components/singUP';


export default function App() {
  return (
    <View style={styles.container}>
      <SingUp/>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
