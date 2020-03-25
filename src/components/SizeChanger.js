import React, { Component } from 'react'

export default class ColorChanger extends Component {
  render() {
    return (
      <select
        disabled={this.props.allowEdit === 'true'}
        onChange={event => this.props.update(event.target.value)}
        className="dropDownContainer"
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}
