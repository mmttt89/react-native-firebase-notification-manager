import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const mapStateToProps = ({ messages }) => ({
    messages: messages.messages
})

class Count extends React.Component {
    state = {
        messages: [],
        newMessages: []
    }

    componentDidUpdate(prevProps) {
        if (prevProps.messages !== this.props.messages) {
            this.setState({ messages: this.props.messages })
            console.log("hey there!!!!");
        }        
    }
    
    render() {
        const { messages } = this.state;
        const newMessages = messages.filter(item => item.unRead)
        return (
            < Text style={{ color: 'red', marginRight: 5 }
            }>
                {newMessages.length == 0 ? " " : `new ${newMessages.length}`}
            </Text >
        )
    }
}

export default connect(mapStateToProps, null)(Count);
