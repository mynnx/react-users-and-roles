import React from 'react';
import {Label, Glyphicon} from 'react-bootstrap';

export default class UserRoles extends React.Component {
  constructor(props) {
    super(props);
    this.renderAddRole = this.renderAddRole.bind(this);
    this.edit = this.edit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.finishEdit = this.finishEdit.bind(this);

    this.state = {
      editing: false
    }
  }

  render() {
    const {roles, onRemoveRole, onAddRole} = this.props;
    const editing = this.state.editing;
    const plusSign = (<Glyphicon glyph="plus"
                                 onClick={this.edit} />);
    return (
      <td>
        {roles.map((role) => (
          <Label>
            {role}
              <Glyphicon glyph="remove"
                 onClick={onRemoveRole.bind(null, role)} />
          </Label>
          ))
        }
        {editing ? this.renderAddRole() : plusSign}
      </td>
    );
  }
  renderAddRole() {
    return <input type="text"
      autoFocus={true}
      placeholder="new role"
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  }

  edit() {
    this.setState({ editing: true })
  }

  checkEnter(e) {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit(e) {
    const role = e.target.value;
    if (role) {
      this.props.onAddRole(e.target.value);
    }

    this.setState({
      editing: false
    });
  }

};


