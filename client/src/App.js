import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Home from "./Pages/Home";
import AddEdit from "./Pages/AddEdit";
import View from "./Pages/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/addContact" Component={AddEdit} />
          <Route path="/update/:id" Component={AddEdit} />
          <Route path="/View/:id" Component={View} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
