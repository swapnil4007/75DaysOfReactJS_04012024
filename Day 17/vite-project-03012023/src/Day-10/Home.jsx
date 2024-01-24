// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to Home</h1>
//     </div>
//   );
// };

import { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    console.log("Home is mounted");

    return () => {
      console.log("Home is Unmounted");
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Home</h1>
      <hr />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default Home;
