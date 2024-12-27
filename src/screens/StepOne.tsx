import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StepOne = () => {
  return (
    <View style={styles.container}>
      <Text>StepOne</Text>
    </View>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
