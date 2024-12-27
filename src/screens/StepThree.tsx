import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StepThree = () => {
  return (
    <View style={styles.container}>
      <Text>StepThree</Text>
    </View>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
