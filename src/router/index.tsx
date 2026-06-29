import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Resume from '@/pages/Resume';
import Snake from '@/pages/Snake';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/snake" element={<Snake/>} />
    </Routes>
  );
}

export default AppRouter