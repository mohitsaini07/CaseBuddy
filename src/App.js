import React, { useState } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether darkmode is enables or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("dark mode is enabled", "success");
      document.title = "TextUtils-Dark-Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
      document.title = "TextUtils-Light-Mode";
    }
  };

  return (
    <>
      {/* <Router> */}
      <div className="vh-100">
        <Navbar
          title="CaseBuddy"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Navbar /> default props */}
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route */}
        {/* exact path="/" element= */}
        {/* { */}
        <About mode={mode} />
        <div className="container shadow-lg rounded my-4 p-4">
          <TextForm
            heading="Change to UPPERCASE/lowercase:"
            mode={mode}
            showAlert={showAlert}
          />
        </div>
        {/* } */}
        {/* ></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
