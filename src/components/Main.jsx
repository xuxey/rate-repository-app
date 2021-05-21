import React from 'react';
import {StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import AppBar from './AppBar';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/sign-in">
          <SignIn/>
        </Route>
        <Redirect to="/" />
      </Switch> 
    </View>
  );
};

export default Main;