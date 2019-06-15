import React from "react";
import { connect } from "react-redux";
import { View, ScrollView } from "react-native";
import AccordionView from "./Accardion-View";

class InboxScreen extends React.Component {
    static navigationOptions = () => ({ title: 'Inbox' });

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.myInbox}>
                    <AccordionView messages={this.props.messages} />
                </ScrollView>
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
        padding: 10,
        marginBottom: 50
    },    
}
