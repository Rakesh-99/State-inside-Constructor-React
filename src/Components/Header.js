import React, { Component } from "react";

class Header extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            name: "Rakesh Kumar Parida",
            msg : this.props.msg
        }
   }

    render() {
        return (
            <div>
                <h1> {this.state.msg } {this.state.name}</h1>
            </div>
        );
    };
};
export default Header;