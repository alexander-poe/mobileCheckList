import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/addTodo'
import SubmitButton from './submitButton';
import {
  View,
  Text
} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button
} from 'native-base';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

  }

  submitTodo() {
    this.props.dispatch(actions.addToDo(this.state.input))
  }

  render() {

    console.log(this.state.input)
    return (
      <View>
        <Form>
          <Item>
            <Input
              type="text"
              onChangeText={(input) => this.setState({input})}
              placeholder="TODO"
              value={this.state.input}
            />
          </Item>
        </Form>
        <View>
          <Button
            onPress={this.submitTodo = this.submitTodo.bind(this)}
            full>
            <Text> Submit </Text>
          </Button>

        </View>
      </View>
    )
  }
}

export default connect()(FormInput)
