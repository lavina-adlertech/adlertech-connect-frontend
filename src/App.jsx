import { Route, Routes } from "react-router-dom";
import BaseLayout from "./Layouts/BaseLayout.jsx";
import Home from "./pages/Home";
import StaffAugmentation from "./pages/StaffAugmentation";
import Dedicated from "./pages/Dedicated";
import Contact from "./pages/Contact";
import Contract from "./pages/Contract";
import Remote from "./pages/Remote";
import Industries from "./pages/Industries";
import Technology from "./pages/Technology";
import HowItWorks from "./pages/HowItWorks";
import Why from "./pages/Why";
import CaseStudies from "./pages/CaseStudies";
import AboutUs from "./pages/AboutUs";
import Schedule from "./pages/Schedule";
import HireDevelopers from "./pages/HireDevelopers";
import HireTalent from "./pages/HireTalent";

function App() {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/StaffAugmentation" element={<StaffAugmentation />} />
        <Route path="/dedicated" element={<Dedicated />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/remote" element={<Remote />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why" element={<Why />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/schedule-call" element={<Schedule />} />
        <Route path="/hire-developers" element={<HireDevelopers />} />
        <Route path="/hire-talents" element={<HireTalent />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
