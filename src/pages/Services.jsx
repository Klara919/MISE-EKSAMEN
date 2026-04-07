import { Routes, Route } from 'react-router-dom';
import ServicesFront from '../components/ServicesFront';
import Menu1 from '../components/Menu1';
import Menu2 from '../components/Menu2';

export default function services() {
  return (
    <Routes>
      <Route path="/" element={<ServicesFront />} />
      <Route path="/menu1" element={<Menu1 />} />
      <Route path="/menu2" element={<Menu2 />} />
    </Routes>
  );
}