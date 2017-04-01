import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base'

export default class SubmitButton extends React.Component {
  submit() {
    alert('hi')
  }
  buttonText="submit"

  render() {
    return (
      <View>
        <Button
          full>
          <Text> Submit </Text>
        </Button>

      </View>
    );
  }
}
