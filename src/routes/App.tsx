import Layout from "components/Layout";
import AppNavBar from "components/AppNavBar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "../styles/main.scss";
function App() {
  return (
    <BrowserRouter>
      <AppNavBar />

      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
