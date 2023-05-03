import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes,Route } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/">
         <Route index element={<Home />} />
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
      </Route>
    </Routes>
    </Layout>
  );
}

export default App;
