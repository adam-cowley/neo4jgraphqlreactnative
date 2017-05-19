import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import styles from '../styles';

import Tweet from './Tweet';

export default class TweetList extends Component {
    render() {
        return (
            <ScrollView style={styles.tweetList}>
               {this.props.tweets.map((tweet, idx) => {
                    return (<Tweet key={idx} tweet={tweet} />)
               })}
            </ScrollView>
        );
    }
}