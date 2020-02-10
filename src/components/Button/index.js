import React, { Component } from 'react'
import './style.css'

export default class Button extends Component {
    render() {
        const { disabled, onClick, label } = this.props;
        return (
            <div className="button-section">
                {disabled && <button data-testid="button-comp" disabled>{label}</button>}
                {!disabled && <button data-testid="button-comp" onClick={onClick}>{label}</button>}
            </div>
        )
    }
}