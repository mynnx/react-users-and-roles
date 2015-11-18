import React from 'react';
import {Input, ButtonInput} from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }

  render() {
    return (
      <form className="add-user-form" onSubmit={this.addUser}>
        <Input type="text" label="Username" ref="username" />
        <Input type="text" label="Roles, separated by commas" ref="roles" />
        <ButtonInput type="submit" value="Add User" />
      </form>
    );
  }

  addUser() {
    let {username, roles} = this.refs;
    username = username.getValue();
    roles = roles.getValue();

    if (username && roles) {
      this.props.onAddUser(username, roles.split(","));
    }
  }
}
