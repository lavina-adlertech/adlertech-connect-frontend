import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";

const BaseLayout = () => {
  return (
    <>
      <Header />

      {/* Page Content */}
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>

      {/* Bottom CTA Section */}
      {/* <BottomCTA /> */}

      <Footer />
    </>
  );
};

export default BaseLayout;
