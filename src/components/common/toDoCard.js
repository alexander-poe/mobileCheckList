import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  node: {
    height: 200,
    margin: 3,
    backgroundColor: 'grey'
  }
})

export default class ToDoCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.node}>
      
      </View>
    )
  }
}
