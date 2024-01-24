import React from "react";
//import HobbiesFiller from "./HobbyPickerTask/Assignment2";
//import HobbiesFiller from "./HobbyPickerTask/AnkitCode";
//import AnkitCode from "./HobbyPickerTask/AnkitCode";
//import TodoList from "./ToDoList Task/ToDoList";
//import ToggleUI from "./Day-6 UseState/3.ToggleUI";
//import StaleCounter from "./Day-7/staleCounter";
//import ShowProducts from "./Day-9/1.show-data";
//import ShowData from "./Day-9/2.show-data2";
//import Users from "./Day-9/2.Ankit-show-data3";
//import SearchUser from "./Assignment/Search_List/search-list";
//import AppRouter from "./Day-10/AppRouter";
import ProductList from "./Assignment/Product-route/product-list";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductDetail from "./Assignment/Product-route/product-details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route
          path="/Assignment/Product-route/product-details/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </Router>
  );
}

export default App;
