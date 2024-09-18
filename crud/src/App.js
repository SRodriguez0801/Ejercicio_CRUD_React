
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Lista} from './components/lista';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Lista />} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
