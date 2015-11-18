import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserList from './UserList.jsx';
import AddUser from './AddUser.jsx';
import uuid from 'node-uuid';
import 'array.prototype.findindex';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.addRole = this.addRole.bind(this);
    this.removeRole = this.removeRole.bind(this);
    this.findUser = this.findUser.bind(this);

    let usersWithIds = this.props.users;
    usersWithIds.forEach((user) => user.id = uuid.v4());
    this.state = { users: usersWithIds };
  }

  findUser(id) {
    const users = this.state.users;
    const userIdx = users.findIndex((user) => user.id === id);
    return userIdx;
  }

  addUser(user, roles) {
    this.setState({
      users: this.state.users.concat([{
        id: uuid.v4(),
        name: user,
        roles: roles
      }])
    });
  }

  editUser(user) {
    const users = this.state.users;
    const userIdx = this.findUser(user.id);
    if (userIdx < 0) { return; }

    users[userIdx].name = user.name;
    this.setState(users);
  }

  removeUser(id) {
    const users = this.state.users;
    const userIdx = this.findUser(id);
    if (userIdx < 0) { return; }

    users.splice(userIdx, 1);
    this.setState(users);
  }

  addRole(id, role) {
    const users = this.state.users;
    const userIdx = this.findUser(id);
    if (userIdx < 0) { return; }

    users[userIdx].roles.push(role);
    this.setState(users);
  }

  removeRole(id, role) {
    const users = this.state.users;
    const userIdx = this.findUser(id);
    if (userIdx < 0) { return; }

    let roles = users[userIdx].roles;
    users[userIdx].roles = roles.filter((userRole) => userRole !== role);
    this.setState(users);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={8}>
            <UserList users={this.state.users}
                      onAddRole={this.addRole}
                      onRemoveRole={this.removeRole}
                      onRemoveUser={this.removeUser}
                      onEditUser={this.editUser}/>
          </Col>
          <Col xs={12} md={4}>
            <AddUser onAddUser={this.addUser} />
          </Col>
        </Row>
      </Grid>
    )
  }
};
