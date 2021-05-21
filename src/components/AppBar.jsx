import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backColor,
    },
    appBarTab: {
        padding: 10,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal>
                <Link to='/' component={Pressable   }>
                    <Text style={styles.appBarTab}>Repositories</Text>
                </Link>
                <Link to='/sign-in' component={Pressable}>
                    <Text style={styles.appBarTab}>Sign In</Text>
                </Link>
                {/* <Link to='/sign-in'>
                    <Text style={styles.appBarTab}>Sign In</Text>
                </Link>
                <Link to='/sign-in'>
                    <Text style={styles.appBarTab}>Sign In</Text>
                </Link>
                <Link to='/sign-in'>
                    <Text style={styles.appBarTab}>Sign In</Text>
                </Link> */}
            </ScrollView>
        </View>);
};

export default AppBar;