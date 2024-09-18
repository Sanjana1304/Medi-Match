import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import LandPage from './layouts/LandPage';
import HomePage from './layouts/HomePage';
import PrivateRoute from "./context/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<LandPage/>} />


          <Route path="/home" element={<PrivateRoute/>} >
            <Route path="" element={<HomePage/>} />
          </Route>
          
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  )
}

export default App
