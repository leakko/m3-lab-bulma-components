import React from "react"
import "./button.css"

export default class Button extends React.Component{
    state = {
        clicked:false
    }
    onClick = (e) => {
this.setState({clicked:true});
        this.props.onClick(e);
    }
    unClick = () => {
        this.setState({clicked:false})
    }
    render(){
        let className="Button";
        if (this.state.clicked) {
            //Ojo al espacio " " de delante de clicked para poder tener asi la clase Button clicked
            className += " clicked";
        }
        return (
            <button className={className} onClick={this.onClick} onTransitionEnd={this.unCLick}>
        {this.props.children}
        </button>
        )
    }
}