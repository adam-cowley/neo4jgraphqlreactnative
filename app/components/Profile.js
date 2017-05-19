import React, {Component} from 'react';
import {View} from 'react-native';
import styles from '../styles';

import TweetList from './TweetList';
import ProfileHeader from './ProfileHeader';

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ProfileHeader User={this.props.User} />
                <TweetList tweets={this.props.User.posted} />
            </View>
        );
    }
}