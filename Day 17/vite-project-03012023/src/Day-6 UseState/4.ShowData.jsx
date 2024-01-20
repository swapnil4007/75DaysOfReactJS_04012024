import { useState } from "react";

const ProfileObj = () => {
  const [profile, setProfile] = useState({
    name: "Ravi",
    password: "",
    city: "Pune",
    state: "",
    hobbies: [],
    isActive: true,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    // Okay okay but bad practise
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <input
        onChange={onInputChange}
        type="text"
        value={profile.name}
        placeholder="Enter name"
        name="name"
      />
      <input
        onChange={onInputChange}
        type="text"
        value={profile.city}
        placeholder="Enter City"
        name="city"
      />
      <input
        onChange={onInputChange}
        type="text"
        name="password"
        value={profile.password}
        placeholder="Enter Password"
      />

      <p>{profile.name}</p>
      <p>{profile.password}</p>
      <p>{profile.city}</p>
    </div>
  );
};

export default ProfileObj;
