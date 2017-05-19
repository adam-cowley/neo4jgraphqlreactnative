import React, {Component} from 'react';
import {Image} from 'react-native';
import styles from '../styles';

export default class Avatar extends Component {
    render() {
        return (
            <Image style={styles.tweetAvatar} source={{uri:this.props.source}} />
        );
    }
}
