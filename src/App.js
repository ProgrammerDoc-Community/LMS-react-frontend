import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Home from './routes/Home';
import Register from './routes/Register';
import Student from './routes/Student';
import Teacher from './routes/Teacher';

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/student' element={<Student />} />
        <Route path='/teacher' element={<Teacher />} />
      </Routes>
    </>
  );
}

export default App