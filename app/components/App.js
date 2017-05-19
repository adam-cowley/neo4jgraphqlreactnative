import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {graphql, gql} from 'react-apollo';
import styles from '../styles';

import Profile from './Profile';
import Loading from './Loading';

class App extends Component {
    render() {
        if (!this.props.data.User) {
            return <Loading />
        }

        return (
            <View style={styles.container}>
                <Profile User={this.props.data.User[0]} />
            </View>
        )
    }
};


const query = gql`{
  User(screen_name:"neo4j") {
    name
    screen_name
    profile_image_url
    statuses
    posted {
      text
      favorites
      postedBy {
        screen_name
        profile_image_url
      }
      retweeted {
        id
        text
        postedBy {
            screen_name
        }
      }
      mentioned {
        id
        screen_name
        profile_image_url
      }
    }
  }
}`;

export default graphql(query)(App);
