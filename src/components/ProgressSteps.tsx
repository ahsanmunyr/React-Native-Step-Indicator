import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface ProgressStepsType {
  steps: {label: string}[];
  currentStep: number;
  containerStyle?: ViewStyle;
  stepStyle?: ViewStyle;
  activeStepStyle?: ViewStyle;
  completedStepStyle?: ViewStyle;
  labelStyle?: TextStyle;
  activeLabelStyle?: TextStyle;
  completedLabelStyle?: TextStyle;
  lineStyle?: ViewStyle;
  activeLineStyle?: ViewStyle;
  completedLineStyle?: ViewStyle;
  activeLabelText?: TextStyle;
  completedLabelText?: TextStyle;
}

const ProgressSteps = ({
  steps,
  currentStep,
  containerStyle,
  stepStyle,
  activeStepStyle,
  completedStepStyle,
  labelStyle,
  activeLabelStyle,
  completedLabelStyle,
  lineStyle,
  activeLineStyle,
  completedLineStyle,
  activeLabelText,
  completedLabelText,
}: ProgressStepsType) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <View style={styles.stepContainer}>
            <View
              style={[
                styles.step,
                stepStyle,
                index < currentStep && completedStepStyle,
                index === currentStep && activeStepStyle,
              ]}>
              <Text
                style={[
                  styles.stepLabel,
                  labelStyle,
                  index < currentStep && completedLabelStyle,
                  index === currentStep && activeLabelStyle,
                ]}>
                {index + 1}
              </Text>
            </View>
            <Text
              style={[
                styles.stepText,
                labelStyle,
                index < currentStep && completedLabelText,
                index === currentStep && activeLabelText,
              ]}>
              {step.label}
            </Text>
          </View>

          {index < steps.length - 1 && (
            <View
              style={[
                styles.line,
                lineStyle,
                index < currentStep && completedLineStyle,
                index === currentStep && activeLineStyle,
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  stepContainer: {
    alignItems: 'center',
  },
  step: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepText: {
    marginTop: 4,
    fontSize: 12,
    color: '#757575',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 1,
    top: -10,
  },
});

export default ProgressSteps;
