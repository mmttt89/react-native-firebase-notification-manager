import React from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import Accordion from 'react-native-collapsible/Accordion';
import { messageReaded } from "@Actions/Messages";

class AccordionView extends React.Component {
    state = {
        activeSections: [],
    };

    _renderHeader = section => {
        return (
            <View style={styles.inboxQueryTitle}>
                <Text style={styles.headerText}>{section.title}</Text>
                <Text style={styles.headerStatus}>{section.unRead ? "Unread" : " "}</Text>
            </View>
        );
    };

    _renderContent = section => {
        return (
            <View style={styles.inboxQueryContent}>
                <Text>{section.body}</Text>
                {
                    section.data.image ?
                        <Image style={{ width: 75, height: 75 }}
                            source={{ uri: section.data.image }} /> : null
                }
            </View>
        );
    };

    _updateSections = activeSections => {
        this.setState({ activeSections });
        let index = activeSections[0];
        if (index != undefined) {
            this.props.messageReaded(index)
        }
    };

    render() {
        return (
            <Accordion
                sections={this.props.messages}
                activeSections={this.state.activeSections}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
                onChange={this._updateSections}
            />
        );
    }
}

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
})

export default connect(mapStateToProps, { messageReaded })(AccordionView);

const styles = {
    container: {},
    inboxQueryTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: "#ededed",
        padding: 10,
        marginBottom: 2,
        borderRadius: 5
    },
    headerText: {
        fontSize: 14,
    },
    headerStatus: {
        fontSize: 13,
        color: 'red'
    },
    inboxQueryContent: {
        backgroundColor: "#fff",
        minHeight: 50,
        padding: 10,
    },
}