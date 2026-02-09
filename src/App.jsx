import { Route, Routes } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout.jsx";
import Home from "./pages/Home";
import StaffAugmentation from "./pages/StaffAugmentation";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/StaffAugmentation" element={<StaffAugmentation />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
