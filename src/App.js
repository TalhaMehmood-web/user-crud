
import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
