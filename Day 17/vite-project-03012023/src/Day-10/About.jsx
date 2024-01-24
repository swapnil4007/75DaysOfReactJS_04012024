//

import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    console.log("About is mounted");

    return () => {
      console.log("About is Unmounted");
    };
  }, []);
  return (
    <div>
      <h1>Welcome to About</h1>

      <hr />
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};
export default About;
