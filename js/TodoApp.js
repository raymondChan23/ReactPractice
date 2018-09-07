const {
  InputField,
  TodoHeader,
  TodoList
} = window.App;

const _createTodo = (todos, title) => {
  todos.push({
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = title;
  return todos;
};

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

class TodoApp extends React.Component {

  componentWillMount() { console.log("componentWillMount") }

  componentDidMount() {

    console.log("componentDidMount")
    const promise = new Promise((resolve, reject) => {
      console.log("promise inside");
      setTimeout(() => resolve(
        fetch('http://localhost:3000/todos')
          .then((response) => response.json())
          .then((todos) => this.setState({ todos }))
      ), 1000);
      console.log("promise inside2");
    });

    promise
      .then((res) => {
        console.log('done fetch successfully')
      })
      .catch((err) => console.log(err));
  }
  componentWillReceiveProps() { console.log("componentWillReceiveProps") }
  shouldComponentUpdate() { return true; }
  componentWillUpdate() { console.log("componentWillUpdate") }
  componentDidUpdate() { console.log("componentDidUpdate") }
  componentWillUnmount() { console.log("componentWillUnmount") }





  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: []
    };
  }

  updateTodosBy(updateFn) {
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoHeader
          title="List"
          username="Jason"
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField
          placeholder="Add List"
          onSubmitEditing={this.updateTodosBy(_createTodo)}
        />
        <TodoList
          todos={todos}
          onUpdateTodo={this.updateTodosBy(_updateTodo)}
          onToggleTodo={this.updateTodosBy(_toggleTodo)}
          onDeleteTodo={this.updateTodosBy(_deleteTodo)}
        />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
