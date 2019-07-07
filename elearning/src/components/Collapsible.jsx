import React, { Component } from 'react'

export default class Collapsible extends Component {
    constructor(props){
        super(props);
        this.state = {
            isExpanded : false
        }
    }

    handleToggle(event){
        event.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded
        })
    }

    render() {
        return (
            <div>
                <button></button>
            </div>
        )
    }
}
