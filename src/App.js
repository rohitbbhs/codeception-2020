import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { ParentRoute } from "./Routes";


const App = () => {
  return (
    <BrowserRouter>
      <div>{renderRoutes(ParentRoute)}</div>
    </BrowserRouter>
  );
};

export default App;
