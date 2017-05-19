import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

import Avatar from './Avatar';
import Retweet from './Retweet';

export default class Tweet extends Component {
    render() {
        const tweet = this.props.tweet;



        return (
            <View style={styles.tweet}>
                <Avatar source={tweet.postedBy.profile_image_url} />

                <View style={styles.tweetText}>
                    <Text>{tweet.text}</Text>
                    {tweet.retweeted && <Retweet tweet={tweet.retweeted} />}
                </View>
            </View>
        );
    }
}