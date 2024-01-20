import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./todolist.css";

class TodoList extends Component {
  state = {
    newTask: "",
    listTasks: [],
    completedtasks: [],
    editingTask: null,
  };

  onTaskChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  onAddNewTask = (e) => {
    const { newTask, listTasks } = this.state;
    const newTaskLC = newTask.toLowerCase();
    if (!newTask) {
      toast("Please enter valid Task");
      return;
    }

    if (listTasks.includes(newTaskLC)) {
      toast("This Task is already exists!");
      return;
    }

    this.setState({ listTasks: [newTask, ...listTasks], newTask: "" });
    toast(`${newTask} added successfully!`);
  };

  onDeleteTask = (task) => {
    const updatedList = this.state.listTasks.filter((item) => item !== task);
    this.setState({ listTasks: updatedList });
    toast(`${task} deleted successfully!`);
  };

  onDoneClick = (task) => {
    const updatedRemainingtasks = this.state.listTasks.filter(
      (item) => item.text !== task.text
    );
    this.setState({
      listTasks: updatedRemainingtasks,
      completedtasks: [...this.state.completedtasks, task],
    });
    toast(`${task.text} marked as done!`);
  };

  onEditTask = (task) => {
    this.setState({ editingTask: task });
  };

  onUpdateTask = () => {
    const { editingTask, listTasks } = this.state;

    const updatedTasks = listTasks.map((task) =>
      task === editingTask ? this.state.newTask : task
    );
    this.setState({ listTasks: updatedTasks, editingTask: null, newTask: "" });
    toast(`${editingTask} updated successfully!`);
  };

  onDoneClickAll = () => {
    const { listTasks } = this.state;

    // Mark all tasks as done
    const updatedCompletedTasks = listTasks.map((task) => ({
      text: task,
      done: true,
    }));

    this.setState({
      listTasks: [],
      completedtasks: [...this.state.completedtasks, ...updatedCompletedTasks],
    });

    toast("All tasks marked as done!");
  };

  render() {
    const { newTask, listTasks, editingTask } = this.state;
    //console.log("Re-Render: ", { newTask, listTasks });

    const shouldRenderDoneButton = !editingTask && listTasks.length > 0;

    return (
      <div className="container">
        <div className="form-element">
          <p>To Do List</p>
          <input
            type="text"
            placeholder="Enter a Task"
            value={newTask}
            onChange={this.onTaskChange}
          />
          {editingTask ? (
            <>
              <button onClick={this.onUpdateTask}>Update Task</button>
              <button
                onClick={() =>
                  this.setState({ editingTask: null, newTask: "" })
                }
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={this.onAddNewTask}>Add Task</button>
              {shouldRenderDoneButton && (
                <button onClick={this.onDoneClickAll}>Done All</button>
              )}
            </>
          )}

          <ToastContainer />
        </div>
        <div className="List">
          {listTasks.length > 0 ? (
            <>
              <p>To Do list tasks are</p>
              <ul>
                {listTasks.map((task, index) => (
                  <li key={index}>
                    {task}
                    <span onClick={() => this.onDeleteTask(task)}> x </span>
                    <button onClick={() => this.onEditTask(task)}>Edit</button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No remaining Tasks.</p>
          )}
        </div>
      </div>
    );
  }
}
export default TodoList;
