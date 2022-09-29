import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

import FoodAppHomepage from "./pages/FoodAppHomepage";

function App() {
  return (
    <Provider store={store}>
      <FoodAppHomepage />
    </Provider>
  );
}

export default App;
