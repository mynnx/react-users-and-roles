import React from 'react';

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.finishEdit = this.finishEdit.bind(this);
    this.checkEnter = this.checkEnter.bind(this);
    this.edit = this.edit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderUser = this.renderUser.bind(this);

    this.state = {
      editing: false
    }
  }

  render() {
    const editing = this.state.editing;
    return (
      <td>
        {editing ? this.renderEdit() : this.renderUser()}
      </td>
    );
  }

  renderEdit() {
    return <input type="text"
      autoFocus={true}
      defaultValue={this.props.name}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />;
  }

  renderUser() {
    return <div onClick={this.edit}>{this.props.name}</div>;
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
    this.props.onEdit(e.target.value);

    this.setState({
      editing: false
    });
  }
}


