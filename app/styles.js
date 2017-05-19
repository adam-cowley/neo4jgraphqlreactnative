import {StyleSheet} from 'react-native';

const brand_primary = '#68BBF4';
const background_primary = '#FFFFFF';
const background_secondary = '#F2F2F2';
const border_primary = '#CCCCCC';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        backgroundColor: brand_primary,
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 10,

    },

    headerImageContainer: {
        flex: .22,
    },
    headerImageText: {
        flex: 1
    },

    headerName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: background_primary
    },
    headerScreenname: {
        fontWeight: 'bold',
        color: background_primary
    },

    headerImage: {
        height: 44,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: 44,
        borderRadius: 22
    },

    tweetList: {
        marginTop:10,
    },

    tweet: {
        borderWidth: 1,
        borderColor: border_primary,
        borderBottomWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 3,
        flexDirection: 'row'
    },

    tweetText: {
        flex: .8
    },

    tweetAvatar: {
        height: 30,
        width: 30,
        borderWidth: 1,
        borderColor: border_primary,
        borderRadius: 15,
        marginRight: 10,
    },

    retweet: {
        borderWidth: 1,
        borderColor: border_primary,
        backgroundColor: background_secondary,
        borderBottomWidth: 2,
        marginTop: 10,
        padding: 10,
    },

    retweetAuthor: {
        fontWeight: 'bold',
    },

    mentions: {
        marginTop: 10,
        flexDirection: 'row',
    }

});

export default styles;