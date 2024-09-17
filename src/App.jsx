import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import LandPage from './layouts/LandPage';
import UserAuth from './layouts/UserAuth';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<LandPage/>} />
          <Route path='/login' element={<UserAuth/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
