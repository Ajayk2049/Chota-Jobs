import { Route, Routes } from "react-router";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
const App = () => {
  const { currTheme } = useContext(ThemeContext);
  return (
    <div className={`${currTheme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;
