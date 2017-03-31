import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubmitButton from './src/components/common/button';
import FormEx from './src/components/common/input';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FormEx />
        <SubmitButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
