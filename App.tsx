import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import StepOne from './src/screens/StepOne';
import StepTwo from './src/screens/StepTwo';
import StepThree from './src/screens/StepThree';
import StepFour from './src/screens/StepFour';
import ProgressSteps from './src/components/ProgressSteps';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const STEP_HEADERS = [
  {heading: 'Heading 1', subHeading: 'Sub Heading 1'},
  {heading: 'Heading 2', subHeading: 'Sub Heading 2'},
  {heading: 'Heading 3', subHeading: 'Sub Heading 3'},
  {heading: 'Heading 4', subHeading: 'Sub Heading 4'},
];

const App: React.FC = ({}: any) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {label: 'Step 1'},
    {label: 'Step 2'},
    {label: 'Step 3'},
    {label: 'Step 4'},
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const ProgressHeader = useCallback(() => {
    const {heading, subHeading} = STEP_HEADERS[currentStep];
    return (
      <View style={styles.topHeader}>
        <Text style={styles.firstHeading}>{heading}</Text>
        <Text style={styles.secondHeading}>{subHeading}</Text>
      </View>
    );
  }, [currentStep]);

  const StepComponent = useCallback(() => {
    switch (currentStep) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
    }
  }, [currentStep]);

  const submitFunc = () => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.safeAreaView}
        edges={['left', 'right', 'top']}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <Text style={styles.stepText}>STEP {currentStep + 1} OF 4</Text>
            {ProgressHeader()}
          </View>

          <View style={styles.progressStepContainer}>
            <ProgressSteps
              steps={steps}
              currentStep={currentStep}
              stepStyle={styles.step}
              activeStepStyle={styles.activeStep}
              completedStepStyle={styles.completedStep}
              labelStyle={styles.label}
              activeLabelStyle={styles.activeLabel}
              activeLabelText={styles.activeLabelText}
              completedLabelStyle={styles.completedLabel}
              completedLabelText={styles.completedLabelText}
              lineStyle={styles.line}
              activeLineStyle={styles.activeLine}
              completedLineStyle={styles.completedLine}
            />
            {StepComponent()}
          </View>
          <View style={styles.buttonContainer}>
            {currentStep === 0 ? (
              <View />
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={handlePrevious}
                disabled={currentStep === 0}>
                <Text style={styles.touchableText}>PREVIOUS</Text>
              </TouchableOpacity>
            )}
            {currentStep === 3 ? (
              <TouchableOpacity
                style={styles.touchable}
                onPress={() => {
                  submitFunc();
                }}>
                <Text style={styles.touchableText}>SUBMIT</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.touchable}
                onPress={handleNext}
                disabled={currentStep === steps.length - 1}>
                <Text style={styles.touchableText}>NEXT</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    alignSelf: 'center',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  stepText: {
    color: 'grey',
    letterSpacing: 2,
    fontSize: 16,
    paddingVertical: 5,
  },
  topHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  firstHeading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
  },
  secondHeading: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  step: {
    backgroundColor: '#e0e0e0',
  },
  activeStep: {
    backgroundColor: '#edce05',
  },
  completedStep: {
    backgroundColor: '#edce05',
  },
  label: {
    color: '#757575',
  },
  activeLabel: {
    color: 'white',
  },
  activeLabelText: {
    color: '#edce05',
  },
  completedLabel: {
    color: 'white',
  },
  completedLabelText: {
    color: 'black',
    fontWeight: '600',
  },
  line: {
    backgroundColor: '#e0e0e0',
    height: 10,
  },
  activeLine: {
    backgroundColor: '#e0e0e0',
    height: 10,
  },
  completedLine: {
    backgroundColor: '#edce05',
  },
  progressStepContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  touchable: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#edce05',
    borderRadius: 12,
  },
  touchableText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default App;
