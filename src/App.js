import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const [isExercise, setIsExercise] = useState(false);

  useEffect(() => {
    setIsExercise(location.pathname.startsWith("/exercise") ? true : false);
  }, [location]);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar isExercise={isExercise} setIsExercise={setIsExercise} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
