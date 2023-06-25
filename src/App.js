import { useState } from "react";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null); //setAlert is use to set the value of yo state

  const showAlert = (message, type) => {
    //showalert is function that takes msg ra type
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }; //function which help to show alert function
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar title="RKT" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
