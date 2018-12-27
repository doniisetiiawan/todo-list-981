import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./Todo.css";

class Todo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      items: []
    };
  }

  componentWillMount() {
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: "Pay the rent",
          completed: false
        },
        { id: uuidv4(), task: "Go to the gym", completed: false },
        {
          id: uuidv4(),
          task: "Do my homework",
          completed: false
        }
      ]
    });
  }

  render() {
    return (
      <div className="Todo">
        <h1>New Task:</h1>
      </div>
    );
  }
}

export default Todo;
