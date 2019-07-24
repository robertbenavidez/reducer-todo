import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ''
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitItem = event => {
    event.preventDefault();
    this.setState({ item: '' });
    this.props.addTodo(event, this.state.item);
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;