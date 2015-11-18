import React from 'react';
import {Table, Glyphicon} from 'react-bootstrap';
import UserRoles from './UserRoles.jsx';
import User from './User.jsx';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.renderUser = this.renderUser.bind(this);
  }

  renderUser(user) {
    return (
      <tr key={user.id} className="user-row">
        <td>
          <Glyphicon glyph="trash"
                     onClick={this.props.onRemoveUser.bind(null, user.id)} />
        </td>
        <User name={user.name} onEdit={this.props.onEditUser}/>
        <UserRoles roles={user.roles}
                   onRemoveRole={this.props.onRemoveRole.bind(null, user.id)}
                   onAddRole={this.props.onAddRole.bind(null, user.id)} />
      </tr>
    )
  }
  render() {
    return (
      <Table striped hover>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Username</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(this.renderUser)}
        </tbody>
      </Table>
    );
  }
}
