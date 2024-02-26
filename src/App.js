import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./View/Home/Home";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail" element={<Detail />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


