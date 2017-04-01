import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import SubmitButton from './common/submitButton';
import FormInput from './common/formInput';
import ToDoCard from './common/toDoCard'
import * as actions from '../actions/addTodo';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch(actions.addToDo('danger'))
  }

  render() {
    this.props.todo ?
      console.log(this.props.todo, ' fri: 403') :
      null;
    return (
        <View style={styles.container}>
          <FormInput/>
          <ToDoCard />
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

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

export default connect(mapStateToProps)(Main);
