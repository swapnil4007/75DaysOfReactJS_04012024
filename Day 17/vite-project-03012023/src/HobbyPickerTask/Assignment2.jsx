import { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class HobbiesFiller extends Component {
  state = {
    newHobby: "",
    hobbies: ["music", "travel"],
  };

  onNewHobbyChange = (e) => {
    this.setState({ newHobby: e.target.value });
  };

  onAddNewHobby = () => {
    const { newHobby, hobbies } = this.state;
    const newHobbyLC = newHobby.toLowerCase();
    if (!newHobby) {
      toast("Please enter a valid hobby!");
      return;
    }

    if (hobbies.includes(newHobbyLC)) {
      toast("This hobby already exists!");
      return;
    }

    this.setState({ hobbies: [newHobbyLC, ...hobbies], newHobby: "" });
    toast(`${newHobby} added successfully!`);
  };

  onDeleteHobby = (hobby) => {
    const updatedHobbies = this.state.hobbies.filter(item => item !== hobby);
    this.setState({ hobbies: updatedHobbies });
    toast(`${hobby} deleted successfully!`);
  };

  onDeleteAllHobbies = () => {
    this.setState({ hobbies: [] });
    toast("All hobbies deleted successfully!");
  };


  render() {
    const { newHobby, hobbies } = this.state;
    console.log("Re-Render: ", { newHobby, hobbies });
    return (
      <div>
        <div className="form-element">
          <p>New Hobby</p>
          <input
            type="text"
            placeholder="Enter a hobby"
            value={newHobby}
            onChange={this.onNewHobbyChange}
          />
          <button onClick={this.onAddNewHobby}>Add Hobby</button>
          <button onClick={this.onDeleteAllHobbies}>Delete All Hobbies</button>
          <ToastContainer />
        </div>
        <div className="List">
        {hobbies.length > 0 ? (
            <>
              <p>Hobbies are</p>
              <ul>
                {hobbies.map((hobby, index) => (
                  <li key={index}>
                    {hobby} 
                    <span onClick={() => this.onDeleteHobby(hobby)}> x </span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>User has not mentioned any hobby.</p>
          )}
      
        </div>
      </div>
    );
  }
}

export default HobbiesFiller;