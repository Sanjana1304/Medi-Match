import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import LandPage from './layouts/LandPage';

function App() {
  

  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<LandPage/>} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
