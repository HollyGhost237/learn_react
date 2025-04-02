import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//importation des composants
import { ClientsList } from "./component/ClientsList";
import {CreateClient} from "./component/CreateClient";
import ClientsDetails from "./component/ClientsDetails";
import UpdateClient from "./component/UpdateClient";
import { Home } from "./component/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/clients/create" element={<CreateClient />} />
        <Route path="/clients/:id" element={<ClientsDetails />} />
        <Route path="/clients/:id/update" element={<UpdateClient />} />
      </Routes>
    </Router>
  );
};

export default App;
