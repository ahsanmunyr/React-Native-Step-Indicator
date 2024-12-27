import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StepTwo = () => {
  return (
    <View style={styles.container}>
      <Text>StepTwo</Text>
    </View>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
