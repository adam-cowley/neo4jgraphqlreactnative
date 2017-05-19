import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {ApolloProvider} from 'react-apollo';

import client from './app/client';
import App from './app/components/App';

export default class neo4jgraphqlreactnative extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        );
    }
}

AppRegistry.registerComponent('neo4jgraphqlreactnative', () => neo4jgraphqlreactnative);
