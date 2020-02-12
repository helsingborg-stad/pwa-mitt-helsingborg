import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { COMPLETED_FORMS_KEY, getData, addDataToArray } from '../services/StorageService';

const TasksContext = React.createContext();

export const TasksConsumer = TasksContext.Consumer;

export class TasksProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentDidMount = () => {
    this.getStoredTasks();
  };

  getStoredTasks = () => {
    const storedTasks = getData(COMPLETED_FORMS_KEY);
    if (storedTasks) {
      this.setState({ tasks: storedTasks });
    }
  };

  addTask = task => {
    addDataToArray(COMPLETED_FORMS_KEY, task);
    this.setState(prevState => {
      const { tasks } = prevState;
      const currentTasks = tasks || [];
      const newTasksState = { tasks: [...currentTasks, task] };
      return newTasksState;
    });
  };

  getTask = taskId => {
    const { tasks } = this.state;
    const task = tasks.find(t => t.id === taskId);
    return task;
  };

  render() {
    const { tasks } = this.state;
    const { children } = this.props;
    return (
      <TasksContext.Provider value={{ tasks, addTask: this.addTask }}>
        {children}
      </TasksContext.Provider>
    );
  }
}

TasksProvider.propTypes = {
  children: PropTypes.node,
};

export default TasksContext;
