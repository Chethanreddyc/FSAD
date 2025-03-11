import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Image from './image';
import { CarouselEx } from './assets/Carsoule';
import Intro from './pages/Hero';
import Login from './pages/Login';
import CustomButton from './assets/CustomButton';
import NewLogin from './pages/NewLogin';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/newlogin" element={<NewLogin />} />
        <Route path="/images" element={<Image />} />
        <Route path="/carousel" element={<CarouselEx />} />
        <Route path="/custombuttom" element={<CustomButton />} />
      </Routes>
    </Router>
  );
};

export default App;