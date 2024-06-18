import React from 'react';
import { MdComputer } from "react-icons/md"; 
import { FaFileUpload } from "react-icons/fa"; 
import robot from '../assets/robotlol.png';
import EncryptButton from './EncryptButton';

const Explain = () => {
  return (
    <section
      className="bg-gray-900 px-4 py-20"
      style={{
        backgroundImage: `url(${robot})`, 
        backgroundSize: '500px 500px', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        minHeight: '110vh', 
        width: '100%', 
      }}
    >
      <div className="container-xl lg:container m-auto text-center">
        <h2 className="text-3xl font-bold mb-6" style={{ paddingBottom: '180px', fontSize: '2.5rem', fontFamily: 'Courier New, Courier, monospace', lineHeight: '3rem' }}>
          <div>
            <span style={{ color: '#00ffff' }}>T</span><span style={{ color: '#08f8ff' }}>h</span><span style={{ color: '#0ff0ff' }}>e</span>
            <span style={{ color: '#17e9ff' }}> </span>
            <span style={{ color: '#1ee1ff' }}>A</span><span style={{ color: '#26daff' }}>p</span><span style={{ color: '#2dd2ff' }}>p</span>
            <span style={{ color: '#35cbff' }}>l</span><span style={{ color: '#3cc3ff' }}>i</span><span style={{ color: '#44bcff' }}>c</span>
            <span style={{ color: '#4bb4ff' }}>a</span><span style={{ color: '#53adff' }}>t</span><span style={{ color: '#5aa5ff' }}>i</span>
            <span style={{ color: '#629eff' }}>o</span><span style={{ color: '#6996ff' }}>n</span>
            <span style={{ color: '#718fff' }}> </span>
            <span style={{ color: '#7887ff' }}>T</span><span style={{ color: '#8080ff' }}>h</span><span style={{ color: '#8778ff' }}>a</span>
            <span style={{ color: '#8f71ff' }}>t</span>
            <span style={{ color: '#9669ff' }}> </span>
            <span style={{ color: '#9e62ff' }}>M</span><span style={{ color: '#a55aff' }}>a</span><span style={{ color: '#ad53ff' }}>k</span>
            <span style={{ color: '#b44bff' }}>e</span><span style={{ color: '#bc44ff' }}>s</span>
            <span style={{ color: '#c33cff' }}> </span>
            <span style={{ color: '#cb35ff' }}>C</span><span style={{ color: '#d22dff' }}>o</span><span style={{ color: '#da26ff' }}>m</span>
            <span style={{ color: '#e11eff' }}>p</span><span style={{ color: '#e917ff' }}>r</span><span style={{ color: '#f00fff' }}>e</span>
            <span style={{ color: '#f808ff' }}>h</span><span style={{ color: '#ff00ff' }}>e</span><span style={{ color: '#fc01fe' }}>n</span>
            <span style={{ color: '#f803fd' }}>s</span><span style={{ color: '#f504fc' }}>i</span><span style={{ color: '#f105fc' }}>o</span>
            <span style={{ color: '#ee06fb' }}>n</span>
            <span style={{ color: '#ea08fa' }}> </span>
            <span style={{ color: '#e709f9' }}>M</span><span style={{ color: '#e30af8' }}>o</span><span style={{ color: '#e00bf7' }}>r</span>
            <span style={{ color: '#dd0df6' }}>e</span>
            <span style={{ color: '#d90ef6' }}> </span>
            <span style={{ color: '#d60ff5' }}>A</span><span style={{ color: '#d210f4' }}>c</span><span style={{ color: '#cf12f3' }}>c</span>
            <span style={{ color: '#cb13f2' }}>e</span><span style={{ color: '#c814f1' }}>s</span><span style={{ color: '#c516f1' }}>s</span>
            <span style={{ color: '#c117f0' }}>i</span><span style={{ color: '#be18ef' }}>b</span><span style={{ color: '#ba19ee' }}>l</span>
            <span style={{ color: '#b71bed' }}>e</span>
            <span style={{ color: '#b31cec' }}> </span>
            
            <span style={{ color: '#b01deb' }}>F</span><span style={{ color: '#ac1eeb' }}>o</span><span style={{ color: '#a920ea' }}>r</span>
            <span style={{ color: '#a621e9' }}> </span>
            <span style={{ color: '#a222e8' }}>E</span><span style={{ color: '#9f23e7' }}>v</span><span style={{ color: '#9b25e6' }}>e</span>
            <span style={{ color: '#9826e5' }}>r</span><span style={{ color: '#9427e5' }}>y</span><span style={{ color: '#9128e4' }}>o</span>
            <span style={{ color: '#8d2ae3' }}>n</span><span style={{ color: '#8a2be2' }}>e</span>
          </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20"> 
          {/* Card 1 */}
          <div className="bg-transparent border border-neon-blue rounded-xl shadow-md p-6 flex flex-col items-center"
            style={{
              backgroundColor: 'rgba(30, 30, 30, 0.5)', 
            }}
          >
            <div className="flex flex-col items-center mb-6">
              <FaFileUpload className="w-12 h-12 text-neon-blue mb-2" /> 
              <h3 className="text-xl font-bold text-neon-blue">Upload</h3>
            </div>
            <div className="mb-4">
              <p className="text-white mb-4 font-bold text-center" style={{fontFamily: 'Courier New, Courier, monospace'}}>
                Upload a video of sign language and effortlessly receive a clear, comprehensive text translation of the entire content. Utilizing state-of-the-art machine learning and natural language processing technologies, this tool accurately translates sign language gestures into coherent text.
              </p>
              <EncryptButton></EncryptButton>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-transparent border border-neon-pink rounded-xl shadow-md p-6 flex flex-col items-center"
            style={{
              backgroundColor: 'rgba(30, 30, 30, 0.5)', 
            }}
          >
            <div className="flex flex-col items-center mb-6">
              <MdComputer className="w-12 h-12 text-neon-pink mb-2" /> 
              <h3 className="text-xl font-bold text-neon-pink">Live Conversion</h3>
            </div>
            <div className="mb-4">
              <p className="text-white mb-4 font-bold text-center" style={{fontFamily: 'Courier New, Courier, monospace'}}>
                Enable your camera to capture various sign languages and receive real-time translation of the gestures into words for easy understanding. This cutting-edge feature leverages advanced computer vision and machine learning algorithms to accurately interpret and convert hand signals into text.
              </p>
              <EncryptButton></EncryptButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explain;
