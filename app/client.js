import {ApolloClient, createNetworkInterface} from 'react-apollo';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        // Thanks Will!
        uri: 'https://graphql.communitygraph.org/graphql/',
    }),
});

export default client;