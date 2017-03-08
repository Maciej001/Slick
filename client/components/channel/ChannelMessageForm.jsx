import React, {Component} from 'react';

class ChannelMessageForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.refs.newMessage.value;
    this.refs.newMessage.value = '';
  }

  render() {
    return (
      <form className="ChannelMessageForm" onSubmit={this.handleSubmit}>
        <input type="text" ref="newMessage"/>
      </form>
    )
  }
};

export default ChannelMessageForm
