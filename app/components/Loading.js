import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.loading}>
                <Text>Loading</Text>
            </View>
        );
    }
}