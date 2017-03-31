import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input
} from 'native-base';

export default class FormEx extends Component {
  render() {
    return (
      <View>
        <Form>
          <Item>
            <Input placeholder="TODO" />
          </Item>
        </Form>
      </View>
    )
  }
}
