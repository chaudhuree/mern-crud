import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import CreatePage from "./Pages/CreatePage";
import ReadPage from "./Pages/ReadPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  
  // for toast start
  const notify = () => toast.success("wow it is done 🎉🎉",{
    theme: "dark",
    autoClose: 2000,
  });
  useEffect(() => {
    notify()
  }, [])
  // for toast end
  return (
    <div className="App">
      {/* <h1></h1>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div> */}
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ReadPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/update/:id" element={<UpdatePage />} />
        </Routes>
      </Router>

    </div>
  );
}
export default App
