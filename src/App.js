import React, { useState } from "react";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import { ContactTable } from "./Pages/ContactTable";

function App() {

  const [contactList, setContactList] = useState([]);
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home setContactList={setContactList} contactList={contactList} />} />
            
            <Route path="/contact-table" element={<ContactTable setContactList={setContactList} contactList={contactList} />} />
          </Routes>
        </Router>
      </div>
    </>
  );
  }

export default App;
