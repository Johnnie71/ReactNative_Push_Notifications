import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function App() {
  const triggerNotificationHandler = () => {

  };

  return (
    <View style={styles.container}>
      <Button title="Trigger Notification" onPress={triggerNotificationHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
