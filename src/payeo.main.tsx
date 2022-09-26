import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RouteIndex from './routes/index.route';

export default function Payeo() {
  return (
        <RouteIndex/>
  );

  return (
    <View style={styles.container}>
      <Text>Main access of payeo apps</Text>
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
