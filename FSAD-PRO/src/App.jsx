import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Image from './image';
import { CarouselEx } from './carsoule';
import Music from './Music';
import CustomButton from './CustomButton'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomButton />} />
        <Route path="/images" element={<Image />} />
        <Route path="/music" element={<Music />} />
        <Route path="/carousel" element={<CarouselEx />} />
      </Routes>
    </Router>
  );
};

export default App;