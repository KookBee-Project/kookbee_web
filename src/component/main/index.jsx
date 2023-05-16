import { Outlet } from "react-router-dom";
import Header from "./NavBar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
