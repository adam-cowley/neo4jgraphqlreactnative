import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles';

import Avatar from './Avatar';
import Retweet from './Retweet';

export default class ProfileHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.headerImageContainer}>
                    <Image style={styles.headerImage} source={{uri:this.props.User.profile_image_url}} />
                </View>
                <View style={styles.headerImageText}>
                    <Text style={styles.headerName}>
                        {this.props.User.name}
                    </Text>
                    <Text style={styles.headerScreenname}>
                        @{this.props.User.screen_name}
                    </Text>
                </View>
            </View>
        );
    }
}