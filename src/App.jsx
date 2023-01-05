import "./App.css";
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecoveryPassword from "./containers/RecoveryPassword";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <div className=" h-screen">
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path='/recovery-password' element={<RecoveryPassword />}/>
            <Route exact path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
