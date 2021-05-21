import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
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
    return <View style={styles.container}>
        <Pressable>
            <Text style={styles.appBarTab}>Repositories</Text>
        </Pressable>
    </View>;
};

export default AppBar;