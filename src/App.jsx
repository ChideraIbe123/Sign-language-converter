// App.js or relevant component where you want to use UploadPage
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UploadPage from './components/UploadPage'; // Import the UploadPage component

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <UploadPage /> {/* Use the UploadPage component here */}
      {/* Other components or sections */}
    </div>
  );
};

export default App;
