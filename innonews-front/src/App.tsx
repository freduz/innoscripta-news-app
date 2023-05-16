import React, { useEffect } from 'react';
import './App.css';
import Main from './routes/Main';
import { useFindAllMutation } from './store/slices/settingsApiSlice';
import {useDispatch} from 'react-redux'
import { setPereferences } from './store/slices/settingsSlice';

function App() {


  
  return (
   <Main/>
  );
}

export default App;
