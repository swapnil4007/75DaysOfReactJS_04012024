import React, { useState, useEffect } from "react";

const SearchUser = () => {
  const [Users1, setUsers1] = useState([]);
  const [istextBoxFocused, setIstextBoxFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    console.log("In step 2 API Calling");
    fetch("https://fakestoreapi.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUsers1(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setUsers1([]);
      });
  }, []);

  const handleTextBoxFocus = () => {
    setIstextBoxFocused(true);
  };

  const handleTextBoxBlur = () => {
    setIstextBoxFocused(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = Users1.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserClick = (user) => {
    // Add the selected user to the list of selected users
    setSelectedUsers([...selectedUsers, user]);

    // Remove the selected user from the Users1 list
    setUsers1((prevUsers) =>
      prevUsers.filter((u) => u.username !== user.username)
    );

    // Clear the search term
    setSearchTerm("");
  };

  const handleChipDelete = (user) => {
    // Remove the user from the selected users
    setSelectedUsers((prevSelected) =>
      prevSelected.filter((u) => u.username !== user.username)
    );

    // Add the user back to the Users1 list
    setUsers1((prevUsers) => [...prevUsers, user]);
  };

  return (
    <div>
      <h3>Pick Users</h3>
      <p>Total Users: {Users1.length}</p>
      <div>
        <input
          type="text"
          placeholder="Search User"
          onChange={handleInputChange}
          onFocus={handleTextBoxFocus}
          onBlur={handleTextBoxBlur}
        />
        {(istextBoxFocused || searchTerm) && (
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id} onClick={() => handleUserClick(user)}>
                {user.username}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {selectedUsers.map((user) => (
          <div key={user.id} className="chip">
            {user.username}
            <span onClick={() => handleChipDelete(user)}>X</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchUser;

/*import { useState, useEffect } from "react";

const SearchUser = () => {
  const [Users1, setUsers1] = useState([]);
  const [istextBoxFocused, setIstextBoxFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("In step 2 API Calling");
    fetch("https://fakestoreapi.com/users")
      .then((data) => data.json())
      .then((data) => {
        setUsers1(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
        setUsers1([]);
      });
  }, []);

  const handleTextBoxFocus = () => {
    setIstextBoxFocused(true);
  };

  const handleTextBoxBlur = () => {
    setIstextBoxFocused(false);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = Users1.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h3>Pick Users</h3>
      <p>Total Users: {Users1.length}</p>
      <input
        type="text"
        placeholder="Search User"
        onChange={handleInputChange}
        onClick={handleTextBoxFocus}
        onBlur={handleTextBoxBlur}
      />
      {istextBoxFocused && (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUser;*/
