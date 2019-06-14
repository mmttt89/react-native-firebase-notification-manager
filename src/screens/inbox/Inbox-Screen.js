import React from "react";
import { connect } from "react-redux";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AccordionView from "./Accardion-View";

class InboxScreen extends React.Component {
    static navigationOptions = () => ({ title: 'Inbox' });

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.myInbox}>
                    <AccordionView messages={this.props.messages} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
})

export default connect(mapStateToProps, null)(InboxScreen);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    myInbox: {
        flex: 1,
        width: '100%',
        padding: 10
    },
    itemView: {
        width: '100%',
        backgroundColor: "#ededed",
        padding: 10,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: 'black'
    },
}
