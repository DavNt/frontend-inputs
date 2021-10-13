import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.component';
import InputSec from './components/input.component';

function App() {
  return (
    <div>
      {/* body */}
      <InputSec/>
      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
