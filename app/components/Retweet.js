import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

export default class Retweet extends Component {
    render() {
        const tweet = this.props.tweet;

        return (
            <View style={styles.retweet}>
                <Text style={styles.retweetAuthor}>@{tweet.postedBy.screen_name} said:</Text>
                <Text style={styles.retweetText}>{tweet.text}</Text>
            </View>
        );
    }
}
