import { Routes, Route, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import { resumeData } from "@/data/resumeData";
import Snake from "@/pages/Snake";
import { SnakePopout } from "@/pages/SnakePopout";
import NavBar from "@/components/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume resumeData={resumeData} />} />
        <Route path="/snake" element={<Snake />} />
      </Route>
      {/* keeps the popout from generating the navbar */}
      <Route path="/snake-popout" element={<SnakePopout />} />
    </Routes>
  );
}

export default AppRouter;
