import React from "react";
const ReactContext = React.createContext();

class UserService extends React.Component {

    static Context = ReactContext;
    render() {
        return (
            <ReactContext.Provider>
                {this.props.children}
            </ReactContext.Provider>
        )
    }
}
export default UserService;