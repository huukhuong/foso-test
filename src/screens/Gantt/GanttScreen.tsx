import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GanttScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sơ đồ Gantt</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GanttScreen; 