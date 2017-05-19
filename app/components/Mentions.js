import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles';

import Avatar from './Avatar';

export default class Mentions extends Component {
    render() {
        return (
            <View style={styles.mentions}>
                {this.props.mentions.map((mention, i) => {
                    return (<Avatar key={i} source={mention.profile_image_url} />)
                })}
            </View>
        );
    }
}