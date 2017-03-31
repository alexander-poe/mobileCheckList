import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import SubmitButton from './src/components/common/submitButton';
import FormInput from './src/components/common/formInput';
import ToDoCard from './src/components/common/toDoCard'
import toDoReducer from './src/reducers/todoReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(toDoReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <FormInput/>
          <SubmitButton />
          <ToDoCard />
        </View>
      </Provider>
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

export default connect()(App)
