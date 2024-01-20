import { useEffect, useState } from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const Users = () => {
  const [userList, setUserList] = useState(null);
  const cardSize = "320px";

  useEffect(() => {
    (async () => {
      const results = await fetch("https://jsonplaceholder.typicode.com/posts");
      const parsedResult = await results.json();
      console.log(parsedResult);
      setUserList(parsedResult);
    })(),
      [];
  }, []);

  const cardStyle = {
    width: cardSize,
    height: "200px",
    background: "#eee",
    padding: "12px",
  };

  const shimmerCardStyle = {
    width: cardSize,
    height: "170px",
  };

  const containerStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const _renderUI = () => {
    if (!userList) {
      return (
        <div style={{ padding: "0 130px" }}>
          <ShimmerSimpleGallery
            card
            imageHeight={170}
            caption
            col={4}
            style={shimmerCardStyle}
          />
        </div>
      );
    }

    if (userList.length === 0) {
      return <p>No users available</p>;
    }

    const list = userList.map((user) => (
      <div key={user.id} style={cardStyle}>
        <div></div>
        <p>{user.title}</p>
      </div>
    ));

    return <div style={containerStyle}>{list}</div>;
  };

  return (
    <div>
      <h1>My Products</h1>
      <hr />
      {_renderUI()}
    </div>
  );
};

export default Users;
