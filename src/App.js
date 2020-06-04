import React from 'react';
import ReactDOM from 'react-dom';
import Search from 'react-search';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import './styles.css';

const todos = [
  {
    task: 'Finish laundry',
    id: 1,
    purchased: false
  },
  {
    task: 'Buy groceries',
    id: 2,
    purchased: false
  },
  {
    task: 'Pay internet bill',
    id: 3,
    purchased: false
  },
  {
    task: 'Buy Pizza',
    id: 4,
    purchased: false
  },
  {
    task: 'Take out trash',
    id: 5,
    purchased: false
  },
  {
    task: 'Feed dogs',
    id: 6,
    purchased: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = (e, item) => {
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todos: [...this.state.todos, newItem]
    });
  };

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => !item.purchased)
    });
  };

  Search = e => {
    e.preventDefault();

  }

  render() {
    console.log('rendering...');
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
